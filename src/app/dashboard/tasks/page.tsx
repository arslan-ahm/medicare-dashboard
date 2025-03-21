import TasksListSection from "@/components/sections/Tasks";

const Page = () => {
  return (
    <div className="bg-white shadow-sm p-4 mt-2 col-span-2">
      <div className="max-h-[70vh] overflow-y-auto custom-scroll px-2">
        <TasksListSection />
      </div>
    </div>
  );
};

export default Page;
