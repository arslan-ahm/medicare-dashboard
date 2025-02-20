"use client";
import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

const patients = [
  // ... (patient data as provided in the previous response)
  {
    name: "Mary Joseph",
    diagnosis: "Malaria",
    status: "Recovered",
    lastAppointment: "20/10/2022",
    nextAppointment: "1/12/2022",
  },
  {
    name: "Amala Jones",
    diagnosis: "Stroke",
    status: "Awaiting surgery",
    lastAppointment: "11/10/2022",
    nextAppointment: "1/12/2022",
  },
  {
    name: "Damilola Oyin",
    diagnosis: "Liver failure",
    status: "On treatment",
    lastAppointment: "9/10/2022",
    nextAppointment: "1/11/2022",
  },
  {
    name: "Selim jubril",
    diagnosis: "Typhoid",
    status: "Awaiting surgery",
    lastAppointment: "12/10/2022",
    nextAppointment: "2/12/2022",
  },
  {
    name: "Paul christian",
    diagnosis: "Gonorrhea",
    status: "On treatment",
    lastAppointment: "22/10/2022",
    nextAppointment: "3/12/2022",
  },
  {
    name: "Rosabel Briggs",
    diagnosis: "Malaria",
    status: "Recovered",
    lastAppointment: "23/10/2022",
    nextAppointment: "4/12/2022",
  },
  {
    name: "Tina Adekeye",
    diagnosis: "Syphilis",
    status: "Recovered",
    lastAppointment: "19/10/2022",
    nextAppointment: "5/12/2022",
  },
  {
    name: "Mark Bossman",
    diagnosis: "Malaria",
    status: "Recovered",
    lastAppointment: "17/10/2022",
    nextAppointment: "2/12/2022",
  },
];

const tableHeaders = [
  "Name",
  "Diagnosis",
  "Status",
  "Last Appointment",
  "Next Appointment",
];

// const statusColor: { [key: string]: string } = {
//   Recovered: "bg-green-100 text-green-800",
//   "Awaiting surgery": "bg-blue-100 text-blue-800",
//   "On treatment": "bg-red-100 text-red-800",
// };

const PatientTable = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 41;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="overflow-x-auto w-full bg-white mt-3 py-2">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="shadow-sm">
          <tr>
            {tableHeaders.map((header, index) => (
              <TableHeading key={index} title={header} />
            ))}
            <th className="relative px-6 py-3">
              <span className="sr-only">Options</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {patients.map((patient, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {patient.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {patient.diagnosis}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-md_varient_blue text-blue`}
                >
                  {patient.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {patient.lastAppointment}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {patient.nextAppointment}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="text-indigo-600 hover:text-indigo-900">
                  ...
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-2">
        <div
          className="inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="sr-only">Previous</span>
            <GrPrevious />
          </button>
          {/* Example pagination buttons - expand as needed */}
          {currentPage > 3 && (
            <>
              <button
                onClick={() => handlePageChange(1)}
                className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50`}
              >
                1
              </button>
              {currentPage > 4 && (
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700">
                  ...
                </span>
              )}
            </>
          )}
          {currentPage > 2 && (
            <button
              onClick={() => handlePageChange(currentPage - 2)}
              className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50`}
            >
              {currentPage - 2}
            </button>
          )}
          {currentPage > 1 && (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50`}
            >
              {currentPage - 1}
            </button>
          )}
          <button
            className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 bg-gray-100`}
          >
            {currentPage}
          </button>
          {currentPage < totalPages && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50`}
            >
              {currentPage + 1}
            </button>
          )}
          {currentPage < totalPages - 1 && (
            <button
              onClick={() => handlePageChange(currentPage + 2)}
              className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50`}
            >
              {currentPage + 2}
            </button>
          )}
          {currentPage < totalPages - 3 && (
            <>
              <span className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700">
                ...
              </span>
              <button
                onClick={() => handlePageChange(totalPages)}
                className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50`}
              >
                {totalPages}
              </button>
            </>
          )}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="sr-only">Next</span>
            <GrNext />
          </button>
        </div>
      </div>
    </div>
  );
};

const TableHeading = ({ title }: { title: string }) => {
  return (
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      {title}
    </th>
  );
};

export default PatientTable;
