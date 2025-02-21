"use client";
import ListHeader from "@/components/details/lists/ListHeader";
import TasksList from "@/components/details/lists/TasksList";

const Tasks = () => {
  return (
    <div className="bg-white shadow-sm p-4 mt-2 col-span-2">
      <ListHeader
        title="Tasks"
        subtext="New Tasks"
        handleClick={() => console.log("Add Task clicked...")}
      />
      <div className="max-h-[70vh] overflow-y-auto custom-scroll px-2">
      <TasksList />
      </div>
    </div>
  );
};

export default Tasks;
