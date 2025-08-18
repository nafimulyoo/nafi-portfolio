import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json()

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.APP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Portfolio Contact Form Submission: ${subject} from ${name}`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    })
    // response ok
    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}