import { NextResponse } from 'next/server';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();

    // Validate input data
    if (!data.name || !data.name.trim()) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    if (!data.email || !data.email.trim()) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    if (!data.message || !data.message.trim()) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Log the form data (in a real application, you would send an email here)
    console.log('Contact form submission:', {
      name: data.name,
      email: data.email,
      message: data.message,
      timestamp: new Date().toISOString(),
    });

    // In a real application, you would:
    // 1. Send an email with the form data
    // 2. Save the submission to a database
    // 3. Trigger any other necessary processes

    // Return success response
    return NextResponse.json({ 
      success: true, 
      message: 'Message received! I will get back to you soon.' 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong while processing your message' },
      { status: 500 }
    );
  }
}

