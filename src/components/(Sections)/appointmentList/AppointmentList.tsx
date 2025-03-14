"use client";

import React, { useState } from "react";
import ListHeader from "@/components/details/lists/ListHeader";
import ModelInterface from "@/components/models/ModelInterface";
import Appointment from "@/components/details/lists/appointments/AppointmentList";
import AppointmentForm from "@/components/forms/Appointment/AppointmentForm";

const AppointmentSection = () => {
  const [modelOpen, setModelOpen] = useState(false);
  return (
    <>
      <ListHeader
        title="Appointments"
        subtext="New Appointment"
        handleClick={() => setModelOpen(true)}
      />
      <div className="max-h-[40vh] overflow-y-auto custom-scroll px-2">
        <Appointment />
      </div>
      <ModelInterface
        title="Add Appointment"
        open={modelOpen}
        setOpen={setModelOpen}
      >
        <AppointmentForm />
      </ModelInterface>
    </>
  );
};

export default AppointmentSection;
