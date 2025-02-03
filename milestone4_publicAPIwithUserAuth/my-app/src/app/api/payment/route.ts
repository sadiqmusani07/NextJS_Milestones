// app/api/payment/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { paymentMethod, amount } = await req.json();

  // Simulate a payment process
  if (paymentMethod === "creditCard" || paymentMethod === "paypal") {
    return NextResponse.json(
      { status: "success", message: "Payment successful" },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { status: "failure", message: "Invalid payment method" },
      { status: 400 }
    );
  }
}
