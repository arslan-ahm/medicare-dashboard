"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import IconButton from "@/components/titlebarActions/IconButton";
import OptionButton from "../DropdownOptions";
import ModelInterface from "@/components/modals/ModelInterface";
import { TableRowItemProps } from "@/types/componentsTypes/table";
import { formatDate } from "@/lib/timeHandler";
import { PATIENT_STATUS } from "@/constants/formData";
import { deletePatient } from "@/store/slices/patient.slice";
import toast from "react-hot-toast";
import { useAppDispatch } from "@/hooks/useRedux";
import PatientForm from "@/components/forms/patient/PatientForm";

const statusColor: { [key: string]: string } = {
  recovered: "bg-md_varient_green text-green",
  "awaiting surgery": "bg-md_varient_blue text-blue",
  "on treatment": "bg-md_varient_red text-red",
  "on going": "bg-md_varient_yellow text-yellow",
};

const TableRowItem: React.FC<TableRowItemProps> = ({ id, patient }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const [updatePatientState, setUpdatePatientState] = useState(false);
  const dispatch = useAppDispatch();
  const refinedStatus =
    PATIENT_STATUS.find((status) => status.value === patient.status)?.label ||
    "N/A";
  const statusBadgeColor =
    statusColor[refinedStatus.toLowerCase()] || "bg-gray-100 text-gray-800";

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const dropdownHeight = 80;

      let top = rect.bottom + 5;
      const left = rect.left - 100;

      if (rect.bottom + dropdownHeight > viewportHeight) {
        top = rect.top - dropdownHeight - 5;
      }

      setPosition({ top, left });
    }
  }, [isOpen]);

  const handleEdit = () => {
    setUpdatePatientState(true);
    setIsOpen(false);
  };

  const handleDelete = async (_id: string) => {
    try {
      await dispatch(deletePatient(_id)).unwrap();
      toast.success("Patient Removed, Successfully... 🙂");
    } catch (error) {
      console.error(error);
      toast.error("Cannot delete patient, Please try again... 😟");
    }
  };

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
          <span className={`px-3 py-1 rounded-full text-nowrap ${statusBadgeColor}`}>
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
    <td className={`px-6 py-4 text-[12px] lg:text-base ${style && style + " rounded-xl "}`}>{title}</td>
  );
};

export default TableRowItem;
