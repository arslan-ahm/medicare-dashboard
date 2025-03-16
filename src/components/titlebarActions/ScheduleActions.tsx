"use client"; // ✅ This makes it a client component

import { CiFilter } from "react-icons/ci";
import { IoAddOutline, IoHelpCircleOutline } from "react-icons/io5";
import IconButton from "./IconButton";
import { BsPrinter } from "react-icons/bs";
import { useState } from "react";
import ModelInterface from "../models/ModelInterface";
import AppointmentForm from "../(forms)/Appointment/AppointmentForm";

const ScheduleActions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const patientBarComponents = [
    {
      icon: <IoAddOutline />,
      handleClick: () => {
        setIsOpen(true);
      },
      hide: false,
    },
    {
      icon: <CiFilter />,
      handleClick: () => {
        console.log("Filter");
      },
      hide: false,
    },
    {
      icon: <BsPrinter />,
      handleClick: () => {
        console.log("Save");
      },
      hide: true,
    },
    {
      icon: <IoHelpCircleOutline />,
      handleClick: () => {
        console.log("Help");
      },
      hide: true,
    },
  ];

  return (
    <>
      <ul className="flex space-x-2">
        {patientBarComponents.map(({ icon, handleClick, hide }, ind) => (
          <li key={ind} className={`${hide && 'cursor-not-allowed'}`}>
            <IconButton icon={icon} handleClick={handleClick} />
          </li>
        ))}
      </ul>
      <ModelInterface title="Add Appointment" open={isOpen} setOpen={setIsOpen}>
        <AppointmentForm />
      </ModelInterface>
    </>
  );
};

export default ScheduleActions;
