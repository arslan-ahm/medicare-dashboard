"use client";

import { PATIENT_PAGE_ACTIONS } from "@/constants/pagebarActions";
import IconButton from "./IconButton";
import { useRouter } from "next/navigation";

const PatientActions = () => {
  const router = useRouter();
  return (
    <>
      <ul className="flex space-x-2">
        {PATIENT_PAGE_ACTIONS.map(({ icon, hide }, ind) => (
          <li
            key={ind}
            className={`${!hide ? "inline-block" : "hidden cursor-not-allowed"} sm:inline-block`}
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
