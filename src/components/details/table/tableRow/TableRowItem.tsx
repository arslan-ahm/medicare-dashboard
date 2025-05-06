"use client";
import React, { ReactNode } from "react";
import Image from "next/image";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import IconButton from "@/components/titlebarActions/IconButton";
import OptionButton from "../../DropdownOptions";
import ModelInterface from "@/components/modal/ModelInterface";
import { TableRowItemProps } from "@/types/componentsTypes/table";
import { formatDate } from "@/utils/timeHandler";
import PatientForm from "@/components/forms/patientForm/PatientForm";
import useTableRowItem from "./useTableRowItem";

const TableRowItem: React.FC<TableRowItemProps> = ({ id, patient }) => {
  const {
    refinedStatus,
    buttonRef,
    isOpen,
    handleDelete,
    handleEdit,
    updatePatientState,
    setUpdatePatientState,
    setIsOpen,
    position,
  } = useTableRowItem(patient);

  return (
    <>
      <TableDetail title={patient.forename + " " + patient.surname} />
      <td className="px-6 py-4">
        <div className="w-[40px] h-[40px] relative rounded-full overflow-hidden">
          <Image
            src={patient.image || "/imgs/profile_placeholder.webp"}
            alt="Patient"
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </div>
      </td>
      <TableDetail title={patient.diagnosis} />
      <TableDetail
        title={
          <span
            className={`px-3 py-1 rounded-full text-nowrap ${
              refinedStatus.toLowerCase() === "recovered"
                ? "bg-md_varient_green text-green"
                : refinedStatus.toLowerCase() === "awaiting surgery"
                ? "bg-md_varient_blue text-blue"
                : refinedStatus.toLowerCase() === "on treatment"
                ? "bg-md_varient_red text-red"
                : refinedStatus.toLowerCase() === "on going"
                ? "bg-md_varient_yellow text-yellow"
                : "bg-slate-300 text-slate-600"
            }`}
          >
            {refinedStatus}
          </span>
        }
      />
      <TableDetail
        title={
          patient.upcomingAppointment
            ? formatDate(patient.upcomingAppointment.toString())
            : "N/A"
        }
      />
      <td>
        <div ref={buttonRef}>
          <IconButton
            icon={<HiOutlineDotsHorizontal />}
            handleClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </td>
      {isOpen && (
        <div
          className="fixed bg-white shadow-md rounded-md border border-gray-200 z-50 w-40"
          style={{ top: position.top, left: position.left }}
        >
          <OptionButton handleClick={handleEdit} text="Edit Task" type="edit" />
          <OptionButton
            handleClick={() => handleDelete(id)}
            text="Delete Task"
            type="delete"
          />
        </div>
      )}

      <ModelInterface
        title="Update Patient"
        open={updatePatientState}
        setOpen={setUpdatePatientState}
      >
        <PatientForm
          onSuccess={() => setUpdatePatientState(false)}
          patient={patient}
          type="model"
        />
      </ModelInterface>
    </>
  );
};

const TableDetail = ({
  title,
  style,
}: {
  title: string | ReactNode;
  style?: string;
}) => {
  return (
    <td
      className={`px-6 py-4 text-[12px] lg:text-base ${
        style && style + " rounded-xl "
      }`}
    >
      {title}
    </td>
  );
};

export default TableRowItem;
