import { useState, useRef, useEffect } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import IconButton from "../../pageTitlebar/IconButton";
import { RiEditLine } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";

type TaskListItemProps =  {
  id: string;
  status: boolean;
  title: string;
  description?: string;
  date: string;
}

const TaskListItem: React.FC<TaskListItemProps> = ({
  id,
  status: initialStatus,
  title,
  description,
  date,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(initialStatus);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLDivElement | null>(null);

  const toggleStatus = () => {
    setIsChecked((prev) => !prev);
    console.log(
      `Task ${id} status changed to: ${
        !isChecked ? "Completed" : "Not Completed"
      }`
    );
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
    const handleClickOutside = (event: MouseEvent) => {
      if (!buttonRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col-reverse sm:flex-row items-center justify-between relative border-b border-gray-200 py-2">
      {/* Task Info */}
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

      <div className="flex justify-between sm:justify-end w-full items-center space-x-2 relative">
        <span className="text-sm text-gray-500">{date}</span>

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
            <OptionButton id={id} text="Edit Task" type="edit" />
            <OptionButton id={id} text="Delete Task" type="delete" />
          </div>
        )}
      </div>
    </div>
  );
};

type OptionButtonProps = {
  id: string;
  text: string;
  type: "edit" | "delete";
};

const OptionButton: React.FC<OptionButtonProps> = ({ text, type, id }) => {
  const handleClick = (type: "edit" | "delete") => {
    if (type === "edit") {
      console.log("Edit Task... " + id);
    }
    if (type === "delete") {
      console.log("Delete Task... " + id);
    }
  };
  return (
    <button
      className={`flex gap-2 w-full text-left px-4 py-2 text-sm text-red-600 ${
        type === "edit"
          ? "hover:bg-light_varient_green hover:text-green"
          : "hover:bg-light_varient_red hover:text-red"
      }`}
      onClick={() => handleClick(type)}
    >
      <span className="text-lg">
        {type === "edit" ? <RiEditLine /> : <MdDeleteOutline />}
      </span>{" "}
      <span>{text}</span>
    </button>
  );
};

export default TaskListItem;
