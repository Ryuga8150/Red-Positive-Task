"use client";
import React, { useState } from "react";
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
  checkAll: boolean;
  setCheckAll: React.Dispatch<React.SetStateAction<boolean>>;
  checkedArr: string[];
  setCheckedArr: React.Dispatch<React.SetStateAction<string[]>>;
};

const Table = ({
  users,
  checkAll,
  checkedArr,
  setCheckAll,
  setCheckedArr,
}: Props) => {
  // const [checkAll, setCheckAll] = useState<boolean>(false);
  // const [checkedArr, setCheckedArr] = useState<string[]>([]);

  console.log(checkAll);
  console.log(checkedArr);
  return (
    <div className="bg-background-dark text-slate-100 grid  grid-rows-8 border rounded border-border-color px-3 py-4">
      <TableHeader>
        <input
          type="checkbox"
          // className="appearance-none w-4 h-4 border-[1.8px]  bg-transparent rounded border-border-light checked:text-white"
          className="h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary"
          // value={checkAll}
          checked={checkAll}
          onChange={(e) => setCheckAll(e.target.checked)}
        />
      </TableHeader>

      {users.map((data, ind) => (
        <TableRow
          key={ind}
          data={data}
          select={checkAll || checkedArr.indexOf(data._id) > -1}
        >
          <input
            type="checkbox"
            // className="appearance-none w-4 h-4 border-[1.8px] bg-transparent rounded border-border-light"
            className="h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary"
            checked={checkAll || checkedArr.indexOf(data._id) > -1}
            onChange={() => {
              if (checkedArr.indexOf(data._id) === -1) {
                setCheckedArr((checkedArr) => [...checkedArr, data._id]);
              } else {
                setCheckedArr((checkedArr) =>
                  checkedArr.filter((id) => id !== data._id)
                );
              }
            }}
          />
        </TableRow>
      ))}
    </div>
  );
};

export default Table;
