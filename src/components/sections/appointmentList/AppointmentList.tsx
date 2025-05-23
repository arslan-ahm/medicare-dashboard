"use client";

import React, { useState } from "react";
import ListHeader from "@/components/details/lists/ListHeader";
import ModelInterface from "@/components/modal/ModelInterface";
import AppointmentList from "@/components/details/lists/appointments/AppointmentList";
import AppointmentForm from "@/components/forms/appointmentForm/AppointmentForm";

const AppointmentSection = () => {
  const [modelOpen, setModelOpen] = useState(false);
  return (
    <>
      <ListHeader
        title="Appointments"
        subtext="New Appointment"
        handleClick={() => setModelOpen(true)}
      />
      <div className="">
        <AppointmentList />
      </div>
      <ModelInterface
        title="Add Appointment"
        open={modelOpen}
        setOpen={setModelOpen}
      >
        <AppointmentForm onSuccess={() => setModelOpen(false)} />
      </ModelInterface>
    </>
  );
};

export default AppointmentSection;
