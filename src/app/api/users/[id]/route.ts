import { connectToDB } from "@/libs/utils";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

type ParamProps = {
  params: {
    id: string;
  };
};
export async function PUT(request: NextRequest, { params }: ParamProps) {
  const { id } = params;
  const { name, email, phone, hobbies } = await request.json();

  console.log({ name, email, phone, hobbies });
  await connectToDB();

  const newUser = await User.findByIdAndUpdate(
    id,
    { name, email, phone, hobbies },
    { new: true }
  );

  return NextResponse.json(
    { statusMessage: "success", data: { user: newUser } },
    { status: 200 }
  );
}

export async function GET(request: NextRequest, { params }: ParamProps) {
  const { id } = params;

  await connectToDB();

  const user = await User.findById(id);

  return NextResponse.json(
    { statusMessage: "success", data: { user } },
    { status: 200 }
  );
}
