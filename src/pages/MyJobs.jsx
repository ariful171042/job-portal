import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaRegEdit } from "react-icons/fa";
import { FiBriefcase, FiMapPin } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { CircleLoader } from "react-spinners";

const MyJobs = () => {
  const email = "arif@gmail.com";
  const [jobs, setJobs] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/myJobs/arif@gmail.com")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      });
  }, [searchText]);

  // handle search
  const handleSearch = () => {
    const filter = jobs.filter(
      (job) =>
        job.jobTitle.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
    setJobs(filter);
  };

  // jobs delete
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/job/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast.success("Successfully delete job");
        }
      });
  };
  return (
    <div className="max-w-screen-2xl container mx-auto  px-4">
      <div className="my-jobs-container flex flex-col gap-5 items-center   pt-5">
        <h1 className="text-2xl">All My Jobs</h1>

        <div className="flex w-full justify-center flex-col md:flex-row gap-4 md:gap-0 ">
          <div className="flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/3 w-full">
            <input
              type="text"
              name="title"
              onChange={(e) => setSearchText(e.target.value)}
              id="title"
              placeholder="Search Jobs"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            />
            <FiBriefcase className="absolute mt-2.5 ml-2 text-gray-600 text-lg" />
          </div>
          <button
            onClick={handleSearch}
            className="bg-blue py-2 px-8 text-white md:rounded-s-none rounded">
            Search
          </button>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-5">
        <div className="grid grid-cols-4 justify-between items-center bg-blue py-3 px-10 rounded-xl text-white ">
          <h3 className="text-xl">Jobs Title</h3>
          <h3 className="text-xl">Job Location</h3>
          <h3 className="text-xl">Job Post By</h3>
          <div className="flex justify-end gap-5">
            <a
              href="#"
              className="bg-white text-blue px-5 py-2 rounded-xl font-semibold text-lg">
              Post Job
            </a>
          </div>
        </div>
        {loading ? (
          <div className="flex justify-center ">
            {" "}
            <CircleLoader color="#2196f3" />
          </div>
        ) : (
          <>
            {jobs?.map((job) => (
              <div
                key={job._id}
                className="grid grid-cols-4 justify-between items-center bg-blue py-3 px-10 rounded-xl text-white ">
                <h3 className="text-xl">{job.jobTitle}</h3>
                <p className="text-xl">{job.jobLocation}</p>
                <p className="text-xl">{job.postedBy}</p>
                <div className="flex justify-end gap-5">
                  <a
                    href="#"
                    className="bg-white text-blue px-5 py-2 rounded-xl font-semibold text-lg">
                    <FaRegEdit className="font-bold" />
                  </a>
                  <button
                    onClick={() => handleDelete(job._id)}
                    href="#"
                    className="bg-white text-red-400 px-5 py-2 rounded-xl font-semibold text-lg">
                    <MdDelete />
                  </button>
                </div>
              </div>
            ))}
          </>
        )}

        <div className=""></div>
      </div>
    </div>
  );
};

export default MyJobs;
