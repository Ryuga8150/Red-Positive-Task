"use client";
import { HiOutlineTrash } from "react-icons/hi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
};

const DeleteButton = ({ id }: Props) => {
  const router = useRouter();
  const deleteUser = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`/api/users?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button onClick={deleteUser}>
      <RiDeleteBin6Fill className="text-red-800 w-5 h-5" />
    </button>
  );
};

export default DeleteButton;
