import React from "react";
import TextButton from "@/components/TextButton";
import InputRow, { InputSection } from "../InputRow";
import CustomSelect from "../CustomSelect";
import { useAddTaskForm } from "./useAddTaskForm";
import { TASK_STATUS } from "@/constants/formValues";

const AddTaskFrom = () => {
  const { formData, handleChange, handleSubmit, error, loading } =
    useAddTaskForm();
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-7 w-full mx-auto bg-white p-6 rounded-md shadow-sm mt-8"
    >
      <table className="w-full border-separate border-spacing-y-3">
        <tbody>
          <InputRow
            lable="Title"
            setValue={handleChange}
            value={formData.title}
            name="title"
            inputType="text"
            placeholder="i.e. Bring Medicines"
            required
          />
          <InputSection title="Details">
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 resize-y overflow-y-auto h-28 rounded-md p-2 focus:outline-none focus:border-primary"
              placeholder="Type here..."
            />
          </InputSection>
          <InputRow
            lable="Date and Time"
            setValue={handleChange}
            value={formData.dateAndTime}
            name="dateAndTime"
            inputType="datetime-local"
            required
          />
          <InputSection title="Specialization">
            <CustomSelect
              name="status"
              value={formData.status}
              onChange={handleChange}
              options={TASK_STATUS}
            />
          </InputSection>
        </tbody>
      </table>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <TextButton type="submit" text={loading ? "Adding..." : "Add Task"} />
    </form>
  );
};

export default AddTaskFrom;
