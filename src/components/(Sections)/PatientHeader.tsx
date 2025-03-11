"use client";
import React from 'react'
import PageTitleBar from '../pageTitlebar/PageTitieBar'
import PatientActions from '../pageTitlebar/PatientActions'
import { useAppSelector } from '@/hooks/useRedux';

const PatientHeader = () => {
    const {patients} = useAppSelector(state => state.patients)
  return (
    <div>
      <PageTitleBar title="Total Population" subtitle={`(${patients.length})`}>
        <PatientActions />
      </PageTitleBar>
    </div>
  )
}

export default PatientHeader
