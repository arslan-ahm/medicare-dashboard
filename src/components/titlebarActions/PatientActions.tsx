"use client";
import { useRouter } from "next/navigation";
import IconButton from "./IconButton";
import { PATIENT_ACTION } from "@/constants/menu";

const PatientActions = () => {
  const router = useRouter();
  return (
    <>
      <ul className="flex space-x-2">
        {PATIENT_ACTION.map(({ icon, hide }, ind) => (
          <li
            key={ind}
            className={`${!hide ? "inline-block" : "hidden"} sm:inline-block`}
          >
            <IconButton
              icon={icon}
              handleClick={
                !hide
                  ? () => {
                      router.push("patients/add");
                    }
                  : () => {}
              }
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default PatientActions;
