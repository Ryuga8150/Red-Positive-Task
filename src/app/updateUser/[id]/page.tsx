import React from "react";

import Form from "@/components/Form";

type Props = {
  params: {
    id: string;
  };
};

const getUser = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/users/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const UpdateUser = async ({ params }: Props) => {
  const { id } = params;
  const user = await getUser(id);
  const url = `/api/users/${user.data.user._id}`;
  const method = "PUT";

  return (
    <div className="h-screen flex items-center justify-center">
      <Form user={user.data.user} url={url} method={method} />
    </div>
  );
};

export default UpdateUser;
