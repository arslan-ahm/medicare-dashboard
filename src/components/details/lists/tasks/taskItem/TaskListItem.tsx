"use client";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { TaskListItemProps } from "@/types/componentsTypes/taskListItem";
import ModelInterface from "@/components/modal/ModelInterface";
import TaskForm from "@/components/forms/taskForm/TaskFrom";
import IconButton from "@/components/titlebarActions/IconButton";
import OptionButton from "../../../DropdownOptions";
import Loader from "@/components/loader/Loader";
import useTaskItem from "./useTaskItem";

const TaskListItem: React.FC<TaskListItemProps> = ({
  id,
  status,
  title,
  description,
  date,
}) => {
  const {
    isDeleteLoading,
    isChecked,
    isOpen,
    toggleStatus,
    buttonRef,
    formattedDate,
    position,
    handleDelete,
    handleEdit,
    updateTaskState,
    setUpdateTaskState,
    setIsOpen,
  } = useTaskItem({ id, status, date });

  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between relative border-b border-gray-200 py-2">
        {isDeleteLoading ? (
          <Loader size="sm" />
        ) : (
          <>
            <div className="flex items-center space-x-4 w-full sm:w-[80%]">
              <input
                type="checkbox"
                name="status"
                checked={isChecked}
                onChange={toggleStatus}
                className="w-6 h-6 accent-blue-600 rounded-md border-gray-300 focus:ring-2 focus:ring-blue-400 checked:bg-primary checked:border-transparent"
              />
              <div>
                <h3
                  className={`text-md md:text-lg font-semibold`}
                >
                  {isChecked ? "Task Completed Successfully" : "Task Not Completed"}
                </h3>
                {description && (
                  <p className="text-[12px] md:text-sm text-gray-500">
                    {title?.length > 50
                      ? `${title.slice(0, 50)}...`
                      : title}
                  </p>
                )}
              </div>
            </div>
          </>
        )}

        <div className="flex justify-between sm:justify-end w-full items-center space-x-2 relative">
          <span className="text-sm text-gray-500">{formattedDate}</span>

          <div ref={buttonRef}>
            <IconButton
              icon={<HiOutlineDotsHorizontal />}
              handleClick={() => setIsOpen(!isOpen)}
            />
          </div>

          {isOpen && (
            <div
              className="fixed bg-white shadow-md rounded-md border border-gray-200 z-50 w-40"
              style={{ top: position.top, left: position.left }}
            >
              <OptionButton
                handleClick={handleEdit}
                text="Edit Task"
                type="edit"
              />
              <OptionButton
                handleClick={handleDelete}
                text="Delete Task"
                type="delete"
              />
            </div>
          )}
        </div>
      </div>
      <ModelInterface
        title="Update Task"
        open={updateTaskState}
        setOpen={setUpdateTaskState}
      >
        <TaskForm
          existingTask={{
            id,
            status,
            date,
            description: description || "",
            title,
          }}
        />
      </ModelInterface>
    </>
  );
};

export default TaskListItem;
