import React from "react";

import Form from "@/components/Form";

type Props = {};

const CreateUser = (props: Props) => {
  const url = `/api/users`;
  const method = "POST";
  return (
    <div className="h-screen flex items-center justify-center">
      <Form url={url} method={method} />
    </div>
  );
};

export default CreateUser;
