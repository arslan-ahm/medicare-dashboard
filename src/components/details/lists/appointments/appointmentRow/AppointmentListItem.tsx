import React from "react";
import { CiEdit } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineDeleteOutline } from "react-icons/md";
import IconButton from "@/components/titlebarActions/IconButton";
import { Appointment } from "@/types/slices/appointment";
import ModelInterface from "@/components/modal/ModelInterface";
import AppointmentForm from "@/components/forms/appointmentForm/AppointmentForm";
import useAppointmentListItem from "./useAppointmentListItem";

const AppointmentListItem = ({ appt }: { appt: Appointment }) => {
  const {
    isCurrent,
    isAccordionOpen,
    setIsAccordionOpen,
    modelOpen,
    setModelOpen,
    handleDelete,
    handleEdit,
  } = useAppointmentListItem(appt);

  return (
    <>
      <div
        className={`absolute -left-5 top-2 w-3 h-3 rounded-full 
            ${isCurrent ? "bg-green" : "bg-md_gray"}
        `}
      ></div>

      <div
        className={`flex justify-between px-1  items-center 
          ${
            isCurrent
              ? "text-black  rounded-md border border-gray-200"
              : "text-gray-600"
          }
        `}
      >
        <div className="flex items-center justify-between text-sm gap-2 py-1">
          <span className="font-semibold">
            {appt.start_time
              ? new Date(appt.start_time)
                  .toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                  })
                  .replace(/ am| pm/, "")
              : "N/A"}
          </span>
          <span>{appt.patientName}</span>
        </div>
        {isCurrent && (
          <div className="flex items-center">
            <IconButton
              size="sm"
              icon={<IoIosArrowDown />}
              handleClick={() => setIsAccordionOpen((prev) => !prev)}
            />
          </div>
        )}
      </div>

      {isCurrent && appt.patientName && appt.purpose && (
        <div
          className={`transition-all duration-300 ${
            isAccordionOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 mt-2 p-2 sm:p-4 border-b border-gray-300">
            <p className="text-sm font-semibold">
              Patient: <span className="font-medium">{appt.patientName}</span>
            </p>
            <p className="text-sm font-semibold">
              Duration:{" "}
              <span className="text-xs text-gray-600">
                {appt.start_time && appt.duration ? (
                    <>
                    {new Date(appt.start_time)
                      .toLocaleTimeString([], {
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                      })
                      .replace(/ am| pm/, "")}{" "}
                    -{" "}
                    {new Date(
                      new Date(appt.start_time).getTime() + appt.duration * 60000
                    )
                      .toLocaleTimeString([], {
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                      })
                      .replace(/ am| pm/, "")}{" "}
                    (
                    {appt.duration} mins)
                    </>
                ) : (
                  "N/A"
                )}
              </span>
            </p>
            <p className="text-sm font-semibold">
              Purpose:{" "}
              <span className="text-xs text-gray-600">{appt.purpose}</span>
            </p>
          </div>
          <div className="flex flex-col-reverse xs:flex-row gap-1 xs:justify-between items-center">
            <ul className="flex items-center gap-2">
              <li>
                <IconButton
                  size="sm"
                  icon={<MdOutlineDeleteOutline className="text-red" />}
                  handleClick={handleDelete}
                />
              </li>
              <li>
                <IconButton
                  size="sm"
                  icon={<CiEdit className="text-sky-600" />}
                  handleClick={handleEdit}
                />
              </li>
              <li>
                <IconButton
                  size="sm"
                  icon={<IoPersonOutline className="text-slate-500" />}
                  handleClick={() => setIsAccordionOpen((prev) => !prev)}
                />
              </li>
            </ul>
            <button className="mt-2 bg-primary px-1 sm:px-3 text-white text-[10px] sm:text-xs py-1 sm:py-2 rounded">
              Begin Appointment
            </button>
          </div>
        </div>
      )}
      <ModelInterface
        title="Update Appointment"
        open={modelOpen}
        setOpen={setModelOpen}
      >
        <AppointmentForm onSuccess={() => setModelOpen(false)} appt={appt} />
      </ModelInterface>
    </>
  );
};

export default AppointmentListItem;
