"use client";
import React, { useState } from "react";
import ListHeader from "@/components/details/lists/ListHeader";
import ModelInterface from "@/components/modal/ModelInterface";
import TaskForm from "@/components/forms/task/TaskFrom";
import TasksList from "@/components/details/lists/tasks/TasksList";

const TasksListSection = () => {
  const [modelOpen, setModelOpen] = useState(false);
  return (
    <>
      <ListHeader
        title="Tasks"
        subtext="New Tasks"
        handleClick={() => setModelOpen(true)}
      />
      <div className="max-h-[40vh] overflow-y-auto custom-scroll px-2">
        <TasksList />
      </div>
      <ModelInterface title="Add Tasks" open={modelOpen} setOpen={setModelOpen}>
        <TaskForm onSuccess={() => setModelOpen(false)} />
      </ModelInterface>
    </>
  );
};

export default TasksListSection;
