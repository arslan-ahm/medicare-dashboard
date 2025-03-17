import { OptionButtonProps } from "@/types/componentsTypes/taskListItem";
import { MdDeleteOutline } from "react-icons/md";
import { RiEditLine } from "react-icons/ri";

const OptionButton: React.FC<OptionButtonProps> = ({
  text,
  type,
  handleClick,
}) => {
  return (
    <button
      className={`flex gap-2 w-full text-left px-4 py-2 text-sm text-red-600 ${
        type === "edit"
          ? "hover:bg-light_varient_green hover:text-green"
          : "hover:bg-light_varient_red hover:text-red"
      }`}
      onClick={handleClick}
    >
      <span className="text-lg">
        {type === "edit" ? <RiEditLine /> : <MdDeleteOutline />}
      </span>{" "}
      <span>{text}</span>
    </button>
  );
};

export default OptionButton;
