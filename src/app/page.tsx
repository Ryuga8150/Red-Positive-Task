import TableContainer from "@/components/TableContainer";
import { headers } from "next/headers";

const getUsers = async (host: string) => {
  try {
    let baseURL =
      process.env.NODE_ENV === "development"
        ? `http://${host}/`
        : `https://${host}/`;

    // console.log(baseURL);

    const res = await fetch(`${baseURL}/api/users`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading users: ", error);
  }
};

export default async function Home() {
  const header = headers();
  const host = header.get("host") || "";
  // console.log(header.get("protocol"));
  const users = await getUsers(host);
  // console.log(users);
  if (!users) return <p>Loading...</p>;
  return (
    <div className="min-w-[10rem] ml-auto mr-auto  h-full px-[2.4rem] pt-[1.8rem] pb-[3.2rem] relative">
      <h1 className="text-center text-4xl font-semibold text-slate-100 mb-12">
        TABULATE
      </h1>
      <TableContainer users={users.data.users} />
      {/* <Form open={open} onOpen={setOpen} /> */}
    </div>
  );
}
