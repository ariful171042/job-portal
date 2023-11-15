import React from "react";
import Button from "../../components/ui/Button";
import InputField from "../../components/inputField";

const Salary = ({ handleClick, handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Salary</h4>
      <div className="">
        <Button
          onClickHandler={handleClick}
          value={"Hourly"}
          title={"Hourly"}
        />
        <Button
          onClickHandler={handleClick}
          value={"Monthly"}
          title={"Monthly"}
        />
        <Button
          onClickHandler={handleClick}
          value={"Yearly"}
          title={"Yearly"}
        />
      </div>

      <div className="mt-2">
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test2"
            value={""}
            onChange={handleChange}
            id="test2"
          />
          <span className="checkmark"></span> Any
        </label>
        <InputField
          handleChange={handleChange}
          value={30}
          title={"< 30000k"}
          name={"test2"}
        />
        <InputField
          handleChange={handleChange}
          value={50}
          title={"< 50000k"}
          name={"test2"}
        />
        <InputField
          handleChange={handleChange}
          value={80}
          title={"< 80000k"}
          name={"test2"}
        />
        <InputField
          handleChange={handleChange}
          value={100}
          title={"< 100000k"}
          name={"test2"}
        />
      </div>
    </div>
  );
};

export default Salary;
