// src/app/api/appointments/route.ts
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { WhatsAppService } from '@/services/whatsapp';
import { z } from 'zod';

// Validation Schema
const appointmentSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().regex(/^\+[1-9]\d{10,14}$/),
  date: z.string(),
  time: z.string(),
  caseType: z.enum(['corporate', 'family', 'criminal', 'civil', 'real-estate', 'other']),
  message: z.string().max(500)
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate input
    const validatedData = appointmentSchema.parse(body);

    // Create appointment
    const appointment = await Appointment.create(validatedData);

    // Send WhatsApp notification
    const whatsapp = new WhatsAppService();
    await whatsapp.sendMessage(
      process.env.OWNER_WHATSAPP!,
      `New Appointment Request:\n...`
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}
