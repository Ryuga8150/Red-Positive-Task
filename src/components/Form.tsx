"use client";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";

type Inputs = {
  name: string;
  email: string;
  phone: string;
  hobbies: string;
};
const schema = yup.object({
  name: yup.string().required(),
  hobbies: yup.string().required(),
  phone: yup
    .string()
    .required("Phone is a required field")
    .matches(
      /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      "Invalid phone number format"
    ),
  email: yup.string().email().required(),
});

type FormProps = {
  user?: Inputs | {};
  url: string;
  method: string;
};

const Form = ({ user = {}, url, method }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  reset(user);
  const router = useRouter();
  const onSubmit: SubmitHandler<Inputs> = async function (formData) {
    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(res);
      if (!res.ok) {
        throw new Error("Error calling api");
      }
      // reset();
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  const onError: SubmitErrorHandler<Inputs> = function (error) {
    console.log(error);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className="w-[18rem]">
      <h2 className="text-center mb-4 text-2xl tracking-wider font-semibold text-slate-50">
        Details
      </h2>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <label className="text-slate-100">Name</label>
          <input
            type="text"
            className="rounded bg-background-light px-2 py-1 text-form-text focus:outline-none focus:border-form-text focus:ring-[1.5px] focus:ring-form-text"
            {...register("name")}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-slate-100">Phone No.</label>
          <input
            type="text"
            className="rounded bg-background-light px-2 py-1 text-form-text focus:outline-none focus:border-form-text focus:ring-[1.5px] focus:ring-form-text"
            {...register("phone")}
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-slate-100">Email</label>
          <input
            type="text"
            className="rounded bg-background-light px-2 py-1 text-form-text focus:outline-none focus:border-form-text focus:ring-[1.5px] focus:ring-form-text"
            {...register("email")}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-slate-100">Hobbies</label>
          <input
            type="text"
            className="rounded bg-background-light px-2 py-1 text-form-text focus:outline-none focus:border-form-text focus:ring-[1.5px] focus:ring-form-text"
            {...register("hobbies")}
          />
          {errors.hobbies && <p>{errors.hobbies.message}</p>}
        </div>
      </div>

      <div className="flex justify-center items-center mt-5">
        <button
          type="submit"
          className="w-full rounded-md px-4 py-2 bg-emerald-950 text-emerald-700 font-semibold"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Form;
