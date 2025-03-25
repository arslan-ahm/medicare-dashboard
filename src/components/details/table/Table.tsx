"use client";
import React from "react";
import TableRowItem from "./item/TableRowItem";
import { PATIENT_TABLE_HEADERS } from "@/constants/formData";
import useTable from "./useTable";

const PatientTable = () => {
  const { patients } = useTable();

  if (!patients.length) {
    return (
      <div className="flex items-center justify-center font-semibold h-28 text-gray-500">
        No Patients Found
      </div>
    );
  }

  return (
    <>
      <div className="relative overflow-x-auto max-w-[82vw] xs:max-w-[85vw] min-[485px]:max-w-[95vw] md:max-w-[90vw] custom-scroll shadow-md">
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
      </div>
    </>
  );
};

export default PatientTable;
