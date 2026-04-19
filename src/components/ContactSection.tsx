import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "@/util/schema";

type FormData = {
  name: string;
  email: string;
  message: string;
};

function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });
  const onSubmit = async (formData: FormData) => {
    const { name, email, message } = formData;
    console.log(name, email, message);
    // e.preventDefault()
  };

  return (
    <div className="w-[95%] mx-auto font-inter">
      <hr className="h-px opacity-20 my-10 lg:my-20" />
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-2">
          <div className="bg-[#FF462E] h-4 w-4 rounded-sm" />
          <span className="font-medium lg:text-lg">
            {"Let's Work Together"}
          </span>
        </div>
        <span className="font-geist-mono text-lg font-medium">©2025</span>
      </div>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl lg:text-[88px] tracking-tighter leading-[100%] font-semibold">
            {"Let's Connect"}
          </h1>
          <p className="tracking-tighter leading-[100%] lg:text-lg opacity-50 font-medium my-5 lg:my-10">
            {
              "Let’s create something amazing together! Reach out I’d love to hear about your project and ideas."
            }
          </p>
        </div>
        <div className="flex-1">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <div className="relative flex flex-col">
              <input
                type="text"
                placeholder="Name*"
                {...register("name")}
                className="outline-none bg-slate-100 p-5 rounded-lg"
              />
              <span className="absolute -bottom-5 text-red-700 text-xs">
                {errors.name?.message}
              </span>
            </div>
            <div className="relative flex flex-col">
              <input
                type="email"
                placeholder="Email*"
                {...register("email")}
                className="outline-none bg-slate-100 p-5 rounded-lg"
              />
              <span className="absolute -bottom-5 text-red-700 text-xs">
                {errors.email?.message}
              </span>
            </div>
            <div className="relative flex flex-col">
              <textarea
                placeholder="Message*"
                rows={8}
                {...register("message")}
                className="outline-none bg-slate-100 p-5 rounded-lg"
              />
              <span className="absolute -bottom-5 text-red-700 text-xs">
                {errors.message?.message}
              </span>
            </div>
            <button
              className="bg-black text-white w-full py-5 rounded-lg transition-opacity ease-in-out duration-500 hover:opacity-50 cursor-pointer"
              type="submit"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
      <hr className="h-px opacity-20 my-10 lg:my-20" />
    </div>
  );
}

export default ContactSection;
