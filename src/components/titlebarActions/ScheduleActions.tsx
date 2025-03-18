"use client";

import { CiFilter } from "react-icons/ci";
import { IoAddOutline, IoHelpCircleOutline } from "react-icons/io5";
import IconButton from "./IconButton";
import { BsPrinter } from "react-icons/bs";
import { useState } from "react";
import ModelInterface from "../modals/ModelInterface";
import AppointmentForm from "../forms/appointment/AppointmentForm";

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
      hide: false,
    },
    {
      icon: <BsPrinter />,
      hide: true,
    },
    {
      icon: <IoHelpCircleOutline />,
      hide: true,
    },
  ];

  return (
    <>
      <ul className="flex space-x-2">
        {patientBarComponents.map(({ icon, handleClick, hide }, ind) => (
          <li
            key={ind}
            className={`${hide && "cursor-not-allowed"} ${
              hide && "sm:inline-block hidden"
            }`}
          >
            <IconButton
              icon={icon}
              handleClick={handleClick ? handleClick : () => {}}
            />
          </li>
        ))}
      </ul>
      <ModelInterface title="Add Appointment" open={isOpen} setOpen={setIsOpen}>
        <AppointmentForm onSuccess={() => setIsOpen(false)} />
      </ModelInterface>
    </>
  );
};

export default ScheduleActions;
