import { useState, useRef, useEffect } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { TaskListItemProps } from "@/types/componentsTypes/taskListItem";
import { formatDate } from "@/lib/timeHandler";
import ModelInterface from "@/components/modals/ModelInterface";
import TaskForm from "@/components/forms/task/TaskFrom";
import { deleteTask, toggleTaskStatus } from "@/store/slices/task.slice";
import { useAppDispatch } from "@/hooks/useRedux";
import toast from "react-hot-toast";
import IconButton from "@/components/titlebarActions/IconButton";
import OptionButton from "../../DropdownOptions";
import Loader from "@/components/loader/Loader";

const TaskListItem: React.FC<TaskListItemProps> = ({
  id,
  status,
  title,
  description,
  date,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(status);
  const [updateTaskState, setUpdateTaskState] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const [formattedDate, setFormattedDate] = useState(formatDate(date));
  const dispatch = useAppDispatch();

  const toggleStatus = async () => {
    const newStatus = !isChecked;
    setIsChecked(newStatus);
    await dispatch(toggleTaskStatus({ id, status: newStatus }));
  };

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const dropdownHeight = 80;

      let top = rect.bottom + 5;
      const left = rect.left - 100;

      if (rect.bottom + dropdownHeight > viewportHeight) {
        top = rect.top - dropdownHeight - 5;
      }

      setPosition({ top, left });
    }
  }, [isOpen]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFormattedDate(formatDate(date));
    }, 60000);

    return () => clearInterval(interval);
  }, [date]);

  const handleDelete = async () => {
    try {
      setIsDeleteLoading(true);
      setIsOpen(false);
      await dispatch(deleteTask(id)).unwrap();
      toast.success("Task Removed, Successfully... 🙂");
    } catch (error) {
      console.error(error);
      toast.error("Cannot delete task, Please try again... 😟");
    } finally {
      setIsDeleteLoading(false);
    }
  };

  const handleEdit = () => {
    setUpdateTaskState(true);
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between relative border-b border-gray-200 py-2">
        {isDeleteLoading ? (
          <Loader size="sm" />
        ) : (
          <>
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                name="status"
                checked={isChecked}
                onChange={toggleStatus}
                className="w-6 h-6 accent-blue-600 rounded-md border-gray-300 focus:ring-2 focus:ring-blue-400 checked:bg-primary checked:border-transparent"
              />
              <div>
                <h3
                  className={`text-md md:text-lg font-semibold ${
                    isChecked ? "line-through text-gray-400" : ""
                  }`}
                >
                  {title}
                </h3>
                {description && (
                  <p className="text-[12px] md:text-sm text-gray-500">
                    {description?.length > 50
                      ? `${description.slice(0, 50)}...`
                      : description}
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
