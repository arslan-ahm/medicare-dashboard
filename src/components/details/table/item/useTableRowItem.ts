import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { PATIENT_STATUS_COLOR } from "@/constants/colors";
import { PATIENT_STATUS } from "@/constants/formData";
import { useAppDispatch } from "@/hooks/useRedux";
import { deletePatient } from "@/store/slices/patient.slice";
import { Patient } from "@/types/slices/patient";

const useTableRowItem = (patient: Patient) => {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const buttonRef = useRef<HTMLDivElement | null>(null);
    const [updatePatientState, setUpdatePatientState] = useState(false);
    const dispatch = useAppDispatch();
    const refinedStatus =
      PATIENT_STATUS.find((status) => status.value === patient.status)?.label ||
      "N/A";
    const statusBadgeColor =
      PATIENT_STATUS_COLOR[refinedStatus.toLowerCase()] || "bg-gray-100 text-gray-800";
  
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

    return {
        handleDelete, 
        handleEdit,
        isOpen,
        setIsOpen,
        statusBadgeColor, 
        refinedStatus,
        position,
        buttonRef,
        updatePatientState,
        setUpdatePatientState
    }
}

export default useTableRowItem;