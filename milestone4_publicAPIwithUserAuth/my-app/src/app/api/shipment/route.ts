// app/api/shipment/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const mockShipmentOptions = [
    { id: "standard", name: "Standard Shipping", price: 5 },
    { id: "express", name: "Express Shipping", price: 15 },
    { id: "overnight", name: "Overnight Shipping", price: 25 },
  ];

  return NextResponse.json(mockShipmentOptions, { status: 200 });
}
