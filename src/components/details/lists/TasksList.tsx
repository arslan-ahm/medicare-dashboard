"use client";
import React from "react";
import TaskListItem from "./TaskListItem";
import { useAppSelector } from "@/hooks/useRedux";

const TasksList = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  console.log('| => ', tasks)
  return (
    <>
      <ul className="space-y-4">
        {tasks.map((task, index) => (
          <li key={index}>
            <TaskListItem
              id={task.id}
              title={task.title}
              date={task.date}
              description={task.description}
              status={task.status}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TasksList;
