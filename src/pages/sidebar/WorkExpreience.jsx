import React from "react";

const WorkExpreience = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Work Experiece</h4>

      <div className="">
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            value={""}
            onChange={handleChange}
            id="test"
          />
          <span className="checkmark"></span>Any Experience
        </label>
        <InputField
          handleChange={handleChange}
          value={"Senior"}
          title={"Senior"}
          name={"test"}
        />
        <InputField
          handleChange={handleChange}
          value={savenDaysAgoDate}
          title={"7 days"}
          name={"test"}
        />
        <InputField
          handleChange={handleChange}
          value={thirtyDaysAgoDate}
          title={"Last month"}
          name={"test"}
        />
      </div>
    </div>
  );
};

export default WorkExpreience;
