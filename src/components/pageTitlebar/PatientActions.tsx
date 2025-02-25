"use client"; // ✅ This makes it a client component

import { CiFilter } from "react-icons/ci";
import { IoAddOutline, IoSearchOutline } from "react-icons/io5";
import IconButton from "./IconButton";
import ModelInterface from "../models/ModelInterface";
import AddAppointmentForm from "../forms/addAppointment/AddAppointmentForm";
import { useState } from "react";

const PatientActions = () => {
  // const router = useRouter();
  const patientBarComponents = [
    {
      icon: <IoAddOutline />,
      handleClick: () => {
        setIsOpen(true);
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

  const [isOpen, setIsOpen] = useState(false);

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
      <ModelInterface title="Add Appointment" open={isOpen} setOpen={setIsOpen}>
        <AddAppointmentForm />
      </ModelInterface>
    </>
  );
};

export default PatientActions;
