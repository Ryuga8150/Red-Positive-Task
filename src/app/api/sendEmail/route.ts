import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { data } = await request.json();
    // console.log(data);
    const html: string = data
      .map(
        (
          obj: {
            _id: string;
            name: string;
            email: string;
            phone: string;
            hobbies: string;
          },
          ind: number
        ) =>
          `
      <h3>User${ind + 1}</h3>
      <span><b>ID:</b> ${obj._id.slice(0, 12)}</span>
      <span><b>NAME</b>: ${obj.name}</span>
      <span><b>EMAIL</b>: ${obj.email}</span>
      <span><b>PHONE</b>: ${obj.phone}</span>
      <span><b>HOBBIES</b>: ${obj.hobbies}</span>
      `
      )
      .join("");
    console.log(html);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.APP_PASSWORD,
      },
    });

    const mailOption = {
      from: process.env.EMAIL_USER,
      to: "ryuga13.1.4@gmail.com",
      // to: "info@redpositive.in",
      subject: "Send User Data",
      html: "<h1><b>USER DATA</b></h1>" + html,
    };
    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}
