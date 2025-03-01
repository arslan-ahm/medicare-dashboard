"use client";
import React, { useState } from "react";
import ListHeader from "@/components/details/lists/ListHeader";
import ModelInterface from "@/components/models/ModelInterface";
import AddTaskFrom from "@/components/forms/addTask/AddTaskFrom";
import TasksList from "@/components/details/lists/TasksList";
// import { fetchTasks } from "@/store/slices/task.slice";
// import { useAppDispatch } from "@/hooks/useRedux";

const TasksListSection = () => {
  const [modelOpen, setModelOpen] = useState(false);
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchTasks());
  // }, [dispatch]);
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
        <AddTaskFrom />
      </ModelInterface>
    </>
  );
};

export default TasksListSection;
