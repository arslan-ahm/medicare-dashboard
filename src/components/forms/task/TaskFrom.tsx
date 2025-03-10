import React from "react";
import TextButton from "@/components/TextButton";
import InputRow, { InputSection } from "../InputRow";
import { useTaskForm } from "./useTaskForm";
import type { TaskFormEditProp } from "@/types/componentsTypes/taskListItem";

const TaskForm = ({ existingTask }: { existingTask?: TaskFormEditProp }) => {
  const { formData, handleChange, handleSubmit, error, loading } =
    useTaskForm(existingTask);
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-7 w-full mx-auto bg-white p-6  rounded-md shadow-sm mt-2"
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
            value={formData.date}
            name="date"
            inputType="datetime-local"
            required
          />
          <InputSection title="Completed">
            <input
              type="checkbox"
              name="status"
              checked={formData.status}
              onChange={handleChange}
              className=" ml-2 mt-2 w-6 h-6 accent-blue-600 rounded-md border-gray-300 focus:ring-2 focus:ring-blue-400 checked:bg-primary checked:border-transparent"
            />
          </InputSection>
        </tbody>
      </table>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <TextButton type="submit" text={loading ? "Adding..." : "Add Task"} />
    </form>
  );
};

export default TaskForm;
