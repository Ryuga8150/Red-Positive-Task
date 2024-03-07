import TableContainer from "@/components/TableContainer";

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
      <TableContainer users={users.data.users} />
      {/* <Form open={open} onOpen={setOpen} /> */}
    </div>
  );
}
