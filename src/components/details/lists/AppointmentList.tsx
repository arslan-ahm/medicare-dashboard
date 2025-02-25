import IconButton from "@/components/pageTitlebar/IconButton";
import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

const appointments = [
  { time: "8:00", name: "Rice Kotlin", status: "past" },
  { time: "8:20", name: "Maya Adamu", status: "past" },
  {
    time: "8:30",
    name: "Bolaji Abdulraheem",
    status: "current",
    details: { time: "8:30 - 9:00", purpose: "General check-up" },
  },
  { time: "9:00", name: "Abayomi Johnson", status: "upcoming" },
  { time: "9:30", name: "Rebecca Gifts", status: "upcoming" },
  { time: "10:00", name: "ERC Report", status: "upcoming" },
  { time: "10:30", name: "Consultation meeting", status: "upcoming" },
  { time: "11:00", name: "Victory Jones", status: "upcoming" },
  { time: "11:30", name: "Board meeting", status: "upcoming" },
];

const AppointmentTimeline = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  // Auto-detect the current appointment
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = `${now.getHours()}:${now
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
      setCurrentTime(formattedTime);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <ul className="relative">
        {appointments.map((appt, index) => {
          const isCurrent = appt.status === "current";
          return (
            <li key={index} className="relative mb-4">
              <div
                className={`absolute -left-5 top-2 w-3 h-3 rounded-full 
                  ${isCurrent ? "bg-green" : "bg-md_gray"}
                  ${appt.status === "past" ? "opacity-50" : ""}`}
              ></div>

              <div
                className={`flex justify-between border-2 border-gray-300 px-3 rounded-lg  items-center ${
                  isCurrent ? "text-black" : "text-gray-600"
                }`}
              >
                <div className="flex items-center text-sm gap-2 py-1">
                  <span className="font-semibold">{appt.time}</span>
                  <span>{appt.name}</span>
                </div>
                {isCurrent && (
                  <div className="flex items-center gap-2">
                    <span className="text-xs">pending...</span>
                    <IconButton
                      size="sm"
                      icon={<IoIosArrowDown />}
                      handleClick={() => setIsAccordionOpen((prev) => !prev)}
                    />
                  </div>
                )}
              </div>

              {isCurrent && appt.details && (
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isAccordionOpen
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="mt-2 p-4 border border-gray-300 rounded-lg shadow-sm">
                    <p className="text-sm font-medium">Patient: {appt.name}</p>
                    <p className="text-xs text-gray-600">
                      Time: {appt.details.time}
                    </p>
                    <p className="text-xs text-gray-600">
                      Purpose: {appt.details.purpose}
                    </p>
                    <button className="mt-2 w-full bg-blue-600 text-white text-xs py-2 rounded">
                      Begin Appointment
                    </button>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AppointmentTimeline;
