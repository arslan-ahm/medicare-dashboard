import TextButton from "@/components/TextButton";
import React from "react";
import { CiFilter } from "react-icons/ci";

const AddPatient = () => {
  return (
    <div className="bg-light_gray">
      <div className="flex justify-between items-center bg-white p-4 mb-4">
        <h3 className="font-semibold">Add Patients</h3>
        <ul className="flex gap-1 sm:gap-2 lg:gap-4">
          <li className="border-2 border-light_gray px-1 w-[35px] text-md_gray aspect-square rounded-md text-4xl flex justify-center items-center">
            <CiFilter />
          </li>
          <TextButton text="Cancel" variant="outline" />
          <TextButton text="Save" />
        </ul>
      </div>
    </div>
  );
};

export default AddPatient;
