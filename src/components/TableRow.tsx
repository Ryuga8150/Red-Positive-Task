import { MdEdit } from "react-icons/md";
import React from "react";
import DeleteButton from "./DeleteButton";
import Link from "next/link";

type TableProps = {
  select?: boolean;
  data: {
    _id: string;
    name: string;
    email: string;
    phone: string;
    hobbies: string;
  };
};

const TableRow = ({ select, data }: TableProps) => {
  return (
    <div
      className={`${
        select && "bg-[#1F1F1F]"
      } grid grid-cols-[0.25fr_repeat(3,1fr)_250px_1fr_0.5fr] items-center py-2 rounded-md`}
    >
      <div className="flex items-center justify-center">
        <input
          type="checkbox"
          className="appearance-none w-4 h-4 border-[1.8px] bg-transparent rounded border-border-light"
        />
      </div>
      <span className="px-1 py-1 text-md">{data?._id.slice(0, 12)}</span>
      <span className="px-1 py-1 text-md">{data?.name}</span>
      <span className="px-1 py-1"> {data?.phone}</span>
      <span className="px-1 py-1">{data?.email}</span>
      <span className="px-1 py-1">{data?.hobbies}</span>
      <div className="flex justify-center items-center gap-3">
        {/* <RiDeleteBin6Fill className="text-red-800 w-5 h-5" /> */}
        <DeleteButton id={data._id} />
        <Link href={`/updateUser/${data._id}`}>
          <MdEdit className="text-amber-700 w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default TableRow;
