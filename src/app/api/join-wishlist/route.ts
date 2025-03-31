import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ message: "Email is required" }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thanks For Joining Wishlist",
      html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
                    <h2 style="color: #333;font-size:18px;font-weight:600;">Welcome to Our Wishlist</h2>
                    <p style="color: #555;">Hi There,</p>
                    <p style="color: #555;">Thank you for your interest in joining our wishlist! We're excited to have you on board.</p>
                    <p style="color: #555;">Stay tuned for updates, exclusive offers, and the latest news from the Medicare Dashboard Team.</p>
                    <p style="color: #555;">If you have any questions or need assistance, feel free to reach out to us at any time.</p>
                    <p style="color: #555;">Thank you,<br/>The Medicare Dashboard Team.</p>
                </div>
                `,
    };

    const sendMail = await transporter.sendMail(mailOptions);
    if (!sendMail) {
      return NextResponse.json({
        success: false,
        status: 400,
        message: "Something went wrong in sending email",
      });
    }

    return NextResponse.json({
      success: true,
      status: 200,
      message: "Reset password email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
};
