import React from "react";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";

type Props = {
  users: {
    _id: string;
    name: string;
    email: string;
    phone: string;
    hobbies: string;
  }[];
};

const Table = ({ users }: Props) => {
  return (
    <div className="bg-background-dark text-slate-100 grid  grid-rows-8 border rounded border-border-color px-3 py-4">
      <TableHeader />

      {users.map((data, ind) => (
        <TableRow key={ind} data={data} />
      ))}
    </div>
  );
};

export default Table;
