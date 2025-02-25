"use client";

import React, { useState } from 'react'
import ListHeader from '@/components/details/lists/ListHeader'
import ModelInterface from '@/components/models/ModelInterface';
import AddTaskFrom from '@/components/forms/addTask/AddTaskFrom';
import Appointment from '@/components/details/lists/AppointmentList';

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
        <ModelInterface title='Add Tasks' open={modelOpen} setOpen={setModelOpen}>
            <AddTaskFrom />
        </ModelInterface>
    </>
  )
}

export default AppointmentSection
