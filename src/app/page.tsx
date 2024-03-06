import Table from "@/components/Table";
import Link from "next/link";

const getUsers = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/users", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};
export default async function Home() {
  const users = await getUsers();
  return (
    <div className="min-w-[10rem] ml-auto mr-auto  h-full px-[2.4rem] pt-[1.8rem] pb-[3.2rem] relative">
      <h1 className="text-center text-4xl font-semibold text-slate-100 mb-12">
        TABULATE
      </h1>
      <div className="min-w-[20rem] mx-auto px-8">
        <Table users={users.data.users} />
        {/* <CreateForm/> */}
        <div className="w-full mt-5 flex items-center">
          <Link href={`/createUser`} className="ml-auto">
            <button
              className="py-1.5 px-4  bg-green-500 text-green-950 ml-auto"
              // onClick={() => setOpen(true)}
            >
              Add
            </button>
          </Link>
        </div>
      </div>
      {/* <Form open={open} onOpen={setOpen} /> */}
    </div>
  );
}
