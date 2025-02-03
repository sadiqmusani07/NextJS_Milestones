import { createClient } from '@sanity/client';
import { NextResponse } from 'next/server';
import { nanoid } from 'nanoid';  // To generate a unique order number

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: '2024-03-21',
  token: process.env.SANITY_API_TOKEN,
});

export async function POST(req: Request) {
  try {
    const orderData = await req.json(); // Parse incoming request data

    // Validate order data
    if (!orderData.items || orderData.items.length === 0) {
      return NextResponse.json({ message: 'No items in order' }, { status: 400 });
    }

    if (!orderData.totalAmount || !orderData.shippingAddress) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Generate a unique order number
    const orderNumber = nanoid();

    // Create order in Sanity
    const order = await client.create({
      _type: 'order',  // Make sure this matches your Sanity schema
      orderNumber,  // Unique order number
      user: { _ref: orderData.user.id }, // Reference to the user
      items: orderData.items.map((item: any) => ({
        _type: 'object',
        product: { _ref: item._id },  // Reference to the product
        quantity: item.quantity,
        price: item.price,
      })),
      totalAmount: orderData.totalAmount,
      status: 'Pending', // Default status
      shippingAddress: {
        address: orderData.shippingAddress.address,
        city: orderData.shippingAddress.city,
        state: orderData.shippingAddress.state,
        zip: orderData.shippingAddress.zip,
      },
      paymentMethod: orderData.paymentMethod,
      paymentStatus: orderData.paymentStatus,
      orderDate: new Date().toISOString(),
    });

    return NextResponse.json({ message: 'Order placed successfully', orderNumber }, { status: 201 });
  } catch (error) {
    console.error('Error placing order:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
