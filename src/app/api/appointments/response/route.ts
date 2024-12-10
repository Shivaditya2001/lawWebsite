import { NextResponse } from 'next/server';
import twilio from 'twilio';

const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { From, Body, To } = body;

    // Parse the response
    const [action, clientPhone] = Body.split(' ');
    const isApproved = action.toUpperCase() === 'YES';

    // Prepare message for client
    const clientMessage = isApproved
      ? `Your appointment request has been approved. We look forward to meeting you.`
      : `Unfortunately, we need to reschedule your appointment. Please call us to find a better time.`;

    // Send response to client
    if (clientPhone) {
      await twilioClient.messages.create({
        body: clientMessage,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: clientPhone
      });
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Response handling error:', error);
    return NextResponse.json(
      { error: 'Failed to process response' },
      { status: 500 }
    );
  }
}
