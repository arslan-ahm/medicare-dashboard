"use client";
import React from "react";
import TaskListItem from "./taskItem/TaskListItem";
import ViewAllButton from "@/components/buttons/ViewAllButton";
import LoaderScreen from "@/components/loader/LoaderScreen";
import useTaskList from "./useTaskList";

const TasksList = () => {
  const { loading, tasks } = useTaskList();

  return (
    <div>
      {loading ? (
        <>
          <LoaderScreen size={10} />
        </>
      ) : tasks.length > 0 ? (
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
      )}
    </div>
  );
};

export default TasksList;
