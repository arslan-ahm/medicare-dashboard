"use client";

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
      hide: true,
    },
    {
      icon: <CiFilter />,
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
            <IconButton
              icon={icon}
              handleClick={handleClick ? handleClick : () => {}}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default PatientActions;
