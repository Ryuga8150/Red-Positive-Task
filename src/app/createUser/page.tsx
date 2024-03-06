import React from "react";

import Form from "@/components/Form";

type Props = {};

const CreateUser = (props: Props) => {
  const url = `/api/users`;
  const method = "POST";
  return (
    <div>
      <Form url={url} method={method} />
    </div>
  );
};

export default CreateUser;
