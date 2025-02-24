"use client"; // ✅ This makes it a client component

import { CiFilter } from "react-icons/ci";
import { IoAddOutline, IoHelpCircleOutline } from "react-icons/io5";
import IconButton from "./IconButton";
import { useRouter } from "next/navigation";
import { BsPrinter } from "react-icons/bs";

const ScheduleActions = () => {
  const router = useRouter();
  const patientBarComponents = [
    {
      icon: <IoAddOutline />,
      handleClick: () => {
        router.push("/dashboard/patients/add");
      },
    },
    {
      icon: <CiFilter />,
      handleClick: () => {
        console.log("Filter");
      },
    },
    {
      icon: <BsPrinter />,
      handleClick: () => {
        console.log("Save");
      },
    },
    {
      icon: <IoHelpCircleOutline />,
      handleClick: () => {
        console.log("Help");
      },
    },
  ];

  return (
    <ul className="flex space-x-2">
      {patientBarComponents.map(({ icon, handleClick }, ind) => (
        <li key={ind}>
          <IconButton icon={icon} handleClick={handleClick} />
        </li>
      ))}
    </ul>
  );
};

export default ScheduleActions;
