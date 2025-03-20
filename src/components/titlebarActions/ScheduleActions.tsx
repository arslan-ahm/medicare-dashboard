"use client";
import IconButton from "./IconButton";
import { useState } from "react";
import ModelInterface from "../modal/ModelInterface";
import AppointmentForm from "../forms/appointment/AppointmentForm";
import { PATIENT_BAR_ACTIONS } from "@/constants/pagebarActions";

const ScheduleActions = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ul className="flex space-x-2">
        {PATIENT_BAR_ACTIONS.map(
          ({ icon, hide, action }, ind) => (
            <li
              key={ind}
              className={`${hide && "cursor-not-allowed"} ${
                hide && "sm:inline-block hidden"
              }`}
            >
              <IconButton
                icon={icon}
                handleClick={
                  action
                    ? () => {
                        setIsOpen(true);
                      }
                    : () => {}
                }
              />
            </li>
          )
        )}
      </ul>
      <ModelInterface title="Add Appointment" open={isOpen} setOpen={setIsOpen}>
        <AppointmentForm onSuccess={() => setIsOpen(false)} />
      </ModelInterface>
    </>
  );
};

export default ScheduleActions;
