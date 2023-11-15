import React from "react";
import { FaEnvelope, FaEnvelopeOpenText, FaRocket } from "react-icons/fa";

const NewsLatter = () => {
  return (
    <div>
      <div className="">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText />
          Email me for hobs
        </h3>
        <p className="text-primary">
          Ut esse eiusmod aute. Sit enim labore dolore. Aute eaFugiat commodo ea
          foes.
        </p>

        <div className="w-full space-y4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@mail.com"
            className="w-full block py-2 pl-3 border focus:outline-none"
          />
          <input
            type="submit"
            value={"Subcribe"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold mt-2"
          />
        </div>
      </div>
      <div className=" mt-20">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket />
          Get noticed faster
        </h3>
        <p className="text-primary">
          Ut esse eiusmod aute. Sit enim labore dolore. Aute eaFugiat commodo ea
          foes.
        </p>

        <div className="w-full space-y4">
          <input
            type="submit"
            value={"Upload your resume"}
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold mt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
