"use client";
import React from "react";
import TaskListItem from "./TaskListItem";
import { useAppSelector } from "@/hooks/useRedux";
import ViewAllButton from "@/components/ViewAllButton";

const TasksList = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);

  return (
    <>
    {
      tasks.length > 0 ?(

        <ul className="space-y-4">
        <ViewAllButton path="/dashboard/tasks" subtext="View all tasks" />
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
      ) : (
        <p className="text-center text-slate-600"> No Tasks Yet</p>
      )
    }
    </>
  );
};

export default TasksList;
