"use client"; // ✅ This makes it a client component

import { CiFilter } from "react-icons/ci";
import { IoAddOutline, IoSearchOutline } from "react-icons/io5";
import IconButton from "./IconButton";
import { useRouter } from "next/navigation";

const PatientActions = () => {
  const router = useRouter();
  const patientBarComponents = [
    {
      icon: <IoAddOutline />,
      handleClick: () => {
        router.push("/dashboard/patients/add");
      },
    },
    {
      icon: <IoSearchOutline />,
      handleClick: () => {
        console.log("Search");
      },
    },
    {
      icon: <CiFilter />,
      handleClick: () => {
        console.log("Filter");
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

export default PatientActions;
