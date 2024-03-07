import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const TableHeader = ({ children }: Props) => {
  
  return (
    <div
      className={`grid grid-cols-[0.25fr_repeat(3,1fr)_250px_1fr_0.5fr] items-center bg-[#1F1F1F] rounded-md`}
    >
      <div className="flex items-center justify-center">{children}</div>

      <span className="px-1 py-1 text-[#737373] font-medium text-xl">ID</span>
      <span className="px-1 py-1 text-[#737373] font-medium text-xl">NAME</span>
      <span className="px-1 py-1 text-[#737373] font-medium text-xl">
        PHONE NO.
      </span>
      <span className="px-1 py-1 text-[#737373] font-medium text-xl">
        EMAIL
      </span>
      <span className="px-1 py-1 text-[#737373] font-medium text-xl">
        HOBBIES
      </span>

      <div />
    </div>
  );
};

export default TableHeader;
