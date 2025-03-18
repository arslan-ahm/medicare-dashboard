import React from "react";
import QuickIcon from "../navbar/QuickIcon";
import { IoClose } from "react-icons/io5";
import { ModelInterfaceProps } from "@/types/componentsTypes/model";

const ModelInterface: React.FC<ModelInterfaceProps> = ({
  header = true,
  title,
  open,
  setOpen,
  children,
}) => {
  return (
    open && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white w-md rounded-md shadow-lg">
          {header && (
            <div className="flex justify-between p-3 bg-primary text-white">
              <p>{title}</p>
              <QuickIcon
                icon={<IoClose />}
                handleClick={() => setOpen(false)}
              />
            </div>
          )}
          {children}
        </div>
      </div>
    )
  );
};

export default ModelInterface;
