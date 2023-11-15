import React from "react";
import InputField from "../../components/inputField";

const JobPostingType = ({ handleChange }) => {
  const now = new Date();
  const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
  const savenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
  const thirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

  //convery date to string
  const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0, 10);
  const savenDaysAgoDate = savenDaysAgo.toISOString().slice(0, 10);
  const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0, 10);

  console.log(savenDaysAgoDate);
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Date of Posting</h4>

      <div className="">
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test3"
            value={""}
            onChange={handleChange}
            id="test3"
          />
          <span className="checkmark"></span>All Time
        </label>
        <InputField
          handleChange={handleChange}
          value={twentyFourHoursAgoDate}
          title={"Last 24 hourse"}
          name={"test3"}
        />
        <InputField
          handleChange={handleChange}
          value={savenDaysAgoDate}
          title={"7 days"}
          name={"test3"}
        />
        <InputField
          handleChange={handleChange}
          value={thirtyDaysAgoDate}
          title={"Last month"}
          name={"test3"}
        />
      </div>
    </div>
  );
};

export default JobPostingType;
