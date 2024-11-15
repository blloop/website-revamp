import { NextResponse } from "next/server";
import emailjs from "@emailjs/browser";

export async function POST(req) {
  try {
    const { templateParams } = await req.json();

    const result = await emailjs.sendForm(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      templateParams,
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
      },
    );

    console.log("SUCCESS!", result.text);
    return NextResponse.json({
      status: 200,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.log("FAILED...", error.message);
    return NextResponse.json(
      { error: error.message, message: "Failed to send email" },
      { status: 400 },
    );
  }
}
