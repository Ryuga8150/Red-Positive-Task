"use client";
import Table from "@/components/Table";
import Link from "next/link";
import emailjs from "@emailjs/browser";

import React, { useRef, useState } from "react";
import { Lekton } from "next/font/google";

type Props = {
  users: {
    _id: string;
    name: string;
    email: string;
    phone: string;
    hobbies: string;
  }[];
};

const TableContainer = ({ users }: Props) => {
  // const formRef = useRef<HTMLFormElement | null>(null);
  const [error, setError] = useState<null | boolean>(null);
  const [success, setSuccess] = useState<null | boolean>(null);
  const [checkAll, setCheckAll] = useState<boolean>(false);
  const [checkedArr, setCheckedArr] = useState<string[]>([]);

  const sendEmail = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      let apiData = [];
      if (checkAll) apiData = users;
      else apiData = users.filter((user) => checkedArr.indexOf(user._id) > -1);

      // console.log(apiData);
      if (apiData.length === 0) {
        alert("Select Users for mail");
        return;
      }
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          data: apiData,
        }),
      });
      const data = await response.json();
      alert(data.message);
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  return (
    <div className="min-w-[20rem] mx-auto px-8">
      <Table
        users={users}
        checkAll={checkAll}
        setCheckAll={setCheckAll}
        checkedArr={checkedArr}
        setCheckedArr={setCheckedArr}
      />
      {/* <CreateForm/> */}
      <div className="w-full mt-5 flex items-center">
        <button
          className="py-1.5 px-4  bg-orange-500 text-orange-950 ml-auto"
          // onClick={() => setOpen(true)}
          // onClick={sendEmail}
          onClick={(e) => sendEmail(e)}
        >
          Email
        </button>
        <Link href={`/createUser`} className="ml-2">
          <button
            className="py-1.5 px-4  bg-green-500 text-green-950 ml-auto"
            // onClick={() => setOpen(true)}
          >
            Add
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TableContainer;
