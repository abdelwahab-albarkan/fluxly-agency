import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'success',
    timestamp: new Date().toISOString(),
    message: 'Agency core API node operational.'
  });
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    return NextResponse.json({
      status: 'success',
      received: true,
      payload: data
    });
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      message: 'Invalid request body'
    }, { status: 400 });
  }
}