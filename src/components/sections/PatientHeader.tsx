"use client";
import React from "react";
import PageTitleBar from "../titlebarActions/PageTitieBar";
import PatientActions from "../titlebarActions/PatientActions";
import { useAppSelector } from "@/hooks/useRedux";

const PatientHeader = () => {
  const { patients } = useAppSelector((state) => state.patients);
  return (
    <div>
      <PageTitleBar title="Total Patients" subtitle={`(${patients.length})`}>
        <PatientActions />
      </PageTitleBar>
    </div>
  );
};

export default PatientHeader;
