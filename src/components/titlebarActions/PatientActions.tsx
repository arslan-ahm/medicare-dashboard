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
       router.push("patients/add");
      },
      hide: false,
    },
    {
      icon: <IoSearchOutline />,
      handleClick: () => {
        console.log("Search");
      },
      hide: true,
    },
    {
      icon: <CiFilter />,
      handleClick: () => {
        console.log("Filter");
      },
      hide: true,
    },
  ];

  return (
    <>
      <ul className="flex space-x-2">
        {patientBarComponents.map(({ icon, handleClick, hide }, ind) => (
          <li
            key={ind}
            className={`${!hide ? "inline-block" : "hidden"} sm:inline-block`}
          >
            <IconButton icon={icon} handleClick={handleClick} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default PatientActions;
