import { useForm } from "react-hook-form";

const JobPost = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/* Form  */}
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="">Job Title</label>
              <input
                type="text"
                defaultValue="web Developer"
                {...register("jobTitle")}
                className="block w-full flex-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="">Compnay Name</label>
              <input
                type="text"
                placeholder="EX: Microsoft Company"
                {...register("companyName")}
                className="block w-full flex-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="">Company Image</label>
              <input
                type="text"
                placeholder="EX: Microsoft Company"
                {...register("companyLogo")}
                className="block w-full flex-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
            <input type="submit" className="my-5" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobPost;
