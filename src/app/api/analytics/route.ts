// src/app/api/analytics/route.ts
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

const analyticsSchema = new mongoose.Schema({
  type: String, // pageview, appointment, etc.
  path: String,
  userAgent: String,
  ip: String,
  timestamp: Date,
  data: mongoose.Schema.Types.Mixed
});

const Analytics = mongoose.models.Analytics || mongoose.model('Analytics', analyticsSchema);

export async function POST(req: Request) {
  try {
    const { type, path, data } = await req.json();

    await Analytics.create({
      type,
      path,
      userAgent: req.headers.get('user-agent'),
      ip: req.headers.get('x-forwarded-for'),
      timestamp: new Date(),
      data
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Analytics error' }, { status: 500 });
  }
}
