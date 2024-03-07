import { connectToDB } from "@/libs/utils";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { name, email, phone, hobbies } = await request.json();
  // console.log({ name, email, phone, hobbies });
  await connectToDB();
  const user = await User.create({ name, email, phone, hobbies });
  // console.log(user);
  return NextResponse.json(
    { statusMessage: "success", data: { user } },
    { status: 201 }
  );
}

export async function GET() {
  await connectToDB();
  const users = await User.find();
  return NextResponse.json(
    { statusMessage: "success", data: { users } },
    { status: 200 }
  );
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectToDB();

  const user = await User.findByIdAndDelete(id);
  // console.log(user);
  if (!user)
    return NextResponse.json({ statusMessage: "fail" }, { status: 500 });

  return NextResponse.json({ statusMessage: "success" }, { status: 200 });
}
