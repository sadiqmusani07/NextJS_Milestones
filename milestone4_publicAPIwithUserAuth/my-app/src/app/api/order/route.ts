// // app/api/orders/route.ts
// import { NextResponse } from "next/server";

// // Mock orders data
// let orders = [
//   { id: "1", user: "user1", total: 100, status: "Pending" },
//   { id: "2", user: "user2", total: 200, status: "Pending" },
// ];

// export async function GET() {
//   return NextResponse.json(orders, { status: 200 });
// }

// export async function PUT(req: Request) {
//   const { id } = req.url.match(/\/api\/orders\/(\d+)/)!.groups!;
//   const { status } = await req.json();

//   orders = orders.map((order) =>
//     order.id === id ? { ...order, status } : order
//   );

//   return NextResponse.json({ message: "Order status updated" }, { status: 200 });
// }
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const {
      items,
      shippingAddress,
      paymentMethod,
      user,
      totalAmount,
    } = await req.json();

    // Validate input
    if (!items || !items.length || !shippingAddress || !paymentMethod || !user) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // Construct order document
    const orderDocument = {
      _type: "order",
      user,
      items,
      totalAmount,
      shippingAddress,
      paymentMethod,
      paymentStatus: paymentMethod === "COD" ? "Pending" : "Completed",
      orderDate: new Date().toISOString(),
    };

    // Save order to Sanity
    const result = await client.create(orderDocument);
    return NextResponse.json({ message: "Order placed successfully", order: result }, { status: 201 });
  } catch (error) {
    console.error("Error placing order:", error);
    return NextResponse.json({ message: "Failed to place order" }, { status: 500 });
  }
}
