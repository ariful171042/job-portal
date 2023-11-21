import { useState } from "react";
import { useForm } from "react-hook-form";
import CreateableSlect from "react-select/creatable";

const JobPost = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedOption;
    console.log(data);
  };

  const options = [
    { value: "javascript", label: "javascript" },
    { value: "C++", label: "C++" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "React", label: "React" },
    { value: "NodeJs", label: "NodeJs" },
  ];
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/* Form  */}
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Frist Row  */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title</label>
              <input
                type="text"
                defaultValue="web Developer"
                {...register("jobTitle")}
                className="block w-full flex-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Compnay Name</label>
              <input
                type="text"
                placeholder="EX: Microsoft Company"
                {...register("companyName")}
                className="block w-full flex-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* Second Row Row  */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Minimum Salary</label>
              <input
                type="number"
                placeholder="$20k"
                {...register("minPrice")}
                className="create-job-inputs"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maxmimax Salary</label>
              <input
                type="text"
                placeholder="$50k"
                {...register("maxPrice")}
                className="create-job-inputs"
              />
            </div>
          </div>
          {/* 3rd Row Row  */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary Type</label>
              <select {...register("salaryType")} className="create-job-inputs">
                <option value="">Choose Your Salary</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary Type</label>
              <input
                type="text"
                placeholder="EX: New York"
                {...register("jobLocation")}
                className="create-job-inputs"
              />
            </div>
          </div>
          {/* 4th rows  */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Jobs Posting Date</label>
              <input
                type="date"
                placeholder="Ex: 2023-11-20"
                {...register("postingDate")}
                className="create-job-inputs"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Experince Level</label>
              <select
                {...register("experienceLevel")}
                className="create-job-inputs">
                <option value="">Choose Your expreince</option>
                <option value="NoExprience">NoExprience</option>
                <option value="Work(Remotely)">Work(Remotely)</option>
                <option value="InternShip">InternShip</option>
              </select>
            </div>
          </div>
          {/* 5th Rows  */}
          <div className="">
            <label className="block mb-2 text-lg">Required Skill Sets</label>
            <CreateableSlect
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isMulti
              className="create-job-inputs py-4"
            />
          </div>

          {/* 6 rows  */}
          <div className="create-job-flex">
            <label className="block mb-2 text-lg">Required Skill Sets</label>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Conpany Logo</label>
              <input
                type="url"
                placeholder="Paste your company logo url"
                {...register("companyLogo")}
                className="create-job-inputs"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Employment Type</label>
              <select
                {...register("employmentType")}
                className="create-job-inputs">
                <option value="">Choose Your expreince</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>

          {/* 7 Rows  */}
          <div className="w-full ">
            <label className="block mb-2 text-lg">Job Descriptions</label>
            <textarea
              {...register("description")}
              className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-600"
              rows={6}
              placeholder="Job Description"></textarea>
          </div>
          <div className="w-full">
            <label className="block mb-2 text-lg">Job post By</label>
            <input
              type="email"
              placeholder="EX: arif@gmail.com"
              {...register("postedBy")}
              className="create-job-inputs"
            />
          </div>
          <input
            type="submit"
            className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default JobPost;
