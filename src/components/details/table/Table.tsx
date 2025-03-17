"use client";
import React from "react";
import TableRowItem from "./TableRowItem";
import { PATIENT_TABLE_HEADERS } from "@/constants/formData";
import { useAppSelector } from "@/hooks/useRedux";

const PatientTable = () => {
  const { patients } = useAppSelector((state) => state.patients);

  if (!patients.length) {
    return (
      <div className="flex items-center justify-center font-semibold h-28 text-gray-500">
        No Patients Found
      </div>
    );
  }

  console.log("Patients: ", patients);

  return (
    <>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            {PATIENT_TABLE_HEADERS.map((header, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index} className="bg-white border-b border-gray-200">
              <TableRowItem id={patient.id} patient={patient} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PatientTable;
