// src/schemas/order.js

export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      {
        name: 'orderNumber',
        title: 'Order Number',
        type: 'string',
        description: 'A unique identifier for the order',
      },
      {
        name: 'user',
        title: 'User',
        type: 'reference',
        to: [{ type: 'user' }],  // Assuming you have a 'user' schema
        description: 'Reference to the user who placed the order',
      },
      {
        name: 'items',
        title: 'Items',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'product',
                title: 'Product',
                type: 'reference',
                to: [{ type: 'product' }],
              },
              {
                name: 'quantity',
                title: 'Quantity',
                type: 'number',
              },
              {
                name: 'price',
                title: 'Price',
                type: 'number',
                description: 'Price of one unit of the product',
              },
            ],
            options: {
              // Make sure each item in the array has a unique _key
              list: [
                {
                  title: 'Item',
                  value: { _key: { type: 'string' } },  // Add unique _key here
                },
              ],
            },
          },
        ],
      },
      {
        name: 'totalAmount',
        title: 'Total Amount',
        type: 'number',
        description: 'Total price of all items in the order',
      },
      {
        name: 'status',
        title: 'Status',
        type: 'string',
        options: {
          list: ['Pending', 'Paid', 'Shipped', 'Delivered', 'Cancelled'],  // Order statuses
        },
        default: 'Pending',
      },
      {
        name: 'shippingAddress',
        title: 'Shipping Address',
        type: 'object',
        fields: [
          {
            name: 'address',
            title: 'Address',
            type: 'string',
          },
          {
            name: 'city',
            title: 'City',
            type: 'string',
          },
          {
            name: 'state',
            title: 'State',
            type: 'string',
          },
          {
            name: 'zip',
            title: 'ZIP Code',
            type: 'string',
          },
        ],
      },
      {
        name: 'paymentMethod',
        title: 'Payment Method',
        type: 'string',
        options: {
          list: [
            { title: 'Credit Card', value: 'Credit Card' },
            { title: 'Debit Card', value: 'Debit Card' },
            { title: 'JazzCash', value: 'JazzCash' },
            { title: 'COD', value: 'COD' },
          ],
        },
      },
      {
        name: 'paymentStatus',
        title: 'Payment Status',
        type: 'string',
        options: {
          list: ['Pending', 'Completed', 'Failed'],
        },
        default: 'Pending',
      },
      {
        name: 'orderDate',
        title: 'Order Date',
        type: 'datetime',
        description: 'The date and time the order was placed',
        initialValue: () => new Date().toISOString(),
      },
    ],
  };
  