import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    { error: 'Authentication failed. Please check your credentials.' },
    { status: 401 }
  );
}
