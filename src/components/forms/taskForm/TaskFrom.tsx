import React from "react";
import TextButton from "@/components/buttons/TextButton";
import InputRow, { InputSection } from "../InputRow";
import { useTaskForm } from "./useTaskForm";
import type { TaskFormEditProp } from "@/types/componentsTypes/taskListItem";

const TaskForm = ({
  existingTask,
  onSuccess,
}: {
  existingTask?: TaskFormEditProp;
  onSuccess?: () => void;
}) => {
  const { formData, handleChange, handleSubmit, error, loading } = useTaskForm(
    existingTask,
    onSuccess
  );
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-7 w-full mx-auto bg-white p-6  rounded-md shadow-sm mt-2"
    >
      <div className="w-full border-separate border-spacing-y-3">
        <div>
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
        </div>
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <TextButton type="submit" text={loading ? "Saving..." : "Save Task"} />
    </form>
  );
};

export default TaskForm;
