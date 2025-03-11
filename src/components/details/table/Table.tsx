"use client";
import React from "react";
import TableRowItem from "./TableRowItem";
import { PATIENT_TABLE_HEADERS } from "@/constants/formData";
import { useAppSelector } from "@/hooks/useRedux";

const PatientTable = () => {
  const { patients } = useAppSelector((state) => state.patients);
  // const [currentPage, setCurrentPage] = React.useState(1);
  // const totalPages = 41;

  // const handlePageChange = (page: number) => {
  //   setCurrentPage(page);
  // };

  if (!patients.length) {
    return (
      <div className="flex items-center justify-center font-semibold h-28 text-gray-500">
        No Patients Found
      </div>
    );
  }

  console.log("Patients: ", patients);

  return (
    // <>
    //   <div className="relative w-full overflow-auto bg-white mt-3 py-2">
    //     <table className="min-w-full divide-y divide-gray-200">
    //       <thead className="shadow-sm">
    //         <tr>
    //           {tableHeaders.map((header, index) => (
    //             <TableHeading key={index} title={header} />
    //           ))}
    //           <th className="relative px-6 py-3">
    //             <span className="sr-only">Options</span>
    //           </th>
    //         </tr>
    //       </thead>
    //       <tbody className="bg-white divide-y divide-gray-200">
    //         {patients.map((patient, index) => (
    //           <tr key={index}>
    //             <td className="px-6 py-4 min-w-[150px] whitespace-nowrap text-sm font-medium text-gray-900">
    //               {patient.name}
    //             </td>
    //             <td className="px-6 py-4 min-w-[150px] whitespace-nowrap text-sm text-gray-500">
    //               <Image
    //                 src="/imgs/profile_placeholder.webp"
    //                 alt="Patient"
    //                 width={40}
    //                 height={40}
    //                 className=""
    //               />
    //             </td>
    //             <td className="px-6 py-4 min-w-[200px] whitespace-nowrap text-sm text-gray-500">
    //               {patient.diagnosis}
    //             </td>
    //             <td className="px-6 py-4 min-w-[120px] whitespace-nowrap text-sm text-gray-500">
    //               <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-md_varient_blue text-blue">
    //                 {patient.status}
    //               </span>
    //             </td>
    //             <td className="px-6 py-4 min-w-[150px] whitespace-nowrap text-sm text-gray-500">
    //               {patient.lastAppointment}
    //             </td>
    //             <td className="px-6 py-4 min-w-[150px] whitespace-nowrap text-sm text-gray-500">
    //               {patient.nextAppointment}
    //             </td>
    //             <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
    //               <button className="text-indigo-600 hover:text-indigo-900">
    //                 ...
    //               </button>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>

    //   <div className="flex justify-center mt-2 w-full">
    //     <div
    //       className="inline-flex rounded-md shadow-sm -space-x-px"
    //       aria-label="Pagination"
    //     >
    //       <button
    //         onClick={() => handlePageChange(currentPage - 1)}
    //         disabled={currentPage === 1}
    //         className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
    //       >
    //         <span className="sr-only">Previous</span>
    //         <GrPrevious />
    //       </button>
    //       {/* Example pagination buttons - expand as needed */}
    //       {currentPage > 3 && (
    //         <>
    //           <button
    //             onClick={() => handlePageChange(1)}
    //             className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50`}
    //           >
    //             1
    //           </button>
    //           {currentPage > 4 && (
    //             <span className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700">
    //               ...
    //             </span>
    //           )}
    //         </>
    //       )}
    //       {currentPage > 2 && (
    //         <button
    //           onClick={() => handlePageChange(currentPage - 2)}
    //           className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50`}
    //         >
    //           {currentPage - 2}
    //         </button>
    //       )}
    //       {currentPage > 1 && (
    //         <button
    //           onClick={() => handlePageChange(currentPage - 1)}
    //           className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50`}
    //         >
    //           {currentPage - 1}
    //         </button>
    //       )}
    //       <button
    //         className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 bg-gray-100`}
    //       >
    //         {currentPage}
    //       </button>
    //       {currentPage < totalPages && (
    //         <button
    //           onClick={() => handlePageChange(currentPage + 1)}
    //           className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50`}
    //         >
    //           {currentPage + 1}
    //         </button>
    //       )}
    //       {currentPage < totalPages - 1 && (
    //         <button
    //           onClick={() => handlePageChange(currentPage + 2)}
    //           className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50`}
    //         >
    //           {currentPage + 2}
    //         </button>
    //       )}
    //       {currentPage < totalPages - 3 && (
    //         <>
    //           <span className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700">
    //             ...
    //           </span>
    //           <button
    //             onClick={() => handlePageChange(totalPages)}
    //             className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50`}
    //           >
    //             {totalPages}
    //           </button>
    //         </>
    //       )}
    //       <button
    //         onClick={() => handlePageChange(currentPage + 1)}
    //         disabled={currentPage === totalPages}
    //         className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
    //       >
    //         <span className="sr-only">Next</span>
    //         <GrNext />
    //       </button>
    //     </div>
    //   </div>
    // </>

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
              <TableRowItem
                id={patient.id}
                patient={patient}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PatientTable;
