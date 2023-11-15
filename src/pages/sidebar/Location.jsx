import React from "react";
import InputField from "../../components/inputField";

const Location = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Locations</h4>

      <div className="">
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            value={""}
            onChange={handleChange}
            id="test"
          />
          <span className="checkmark"></span>All
        </label>
        <InputField
          handleChange={handleChange}
          value={"Dhaka"}
          title={"Dhaka"}
          name={"test"}
        />
        <InputField
          handleChange={handleChange}
          value={"Tokyo"}
          title={"Tokyo"}
          name={"test"}
        />
        <InputField
          handleChange={handleChange}
          value={"Sydney"}
          title={"Sydney"}
          name={"test"}
        />
        <InputField
          handleChange={handleChange}
          value={"Tangail"}
          title={"Tangail"}
          name={"test"}
        />
      </div>
    </div>
  );
};

export default Location;
