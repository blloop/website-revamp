import { NextResponse } from "next/server";
import emailjs from "@emailjs/browser";

export async function POST(req) {
  try {
    const params = await req.json();

    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: process.env.EMAILJS_SERVICE_ID,
          template_id: process.env.EMAILJS_TEMPLATE_ID,
          user_id: process.env.EMAILJS_PUBLIC_KEY,
          template_params: params,
          accessToken: process.env.EMAILJS_PRIVATE_KEY,
        }),
      },
    );

    const responseText = await response.text();

    if (response.ok) {
      console.log("Email sent successfully!", responseText);
      return NextResponse.json({
        status: 200,
        message: "Email sent successfully!",
      });
    } else {
      console.log("Failed to send email:", responseText);
      return NextResponse.json({
        status: 400,
        message: responseText || "Failed to send email",
      });
    }
  } catch (error) {
    console.log("Failed to send email:", responseText);
    return NextResponse.json({
      status: 400,
      message: responseText || "Failed to send email",
    });
  }
}
