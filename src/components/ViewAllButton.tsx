"use client";
import React from "react";
import ListSideHeader from "./details/lists/ListSideHeader";
import { IoIosArrowForward } from "react-icons/io";
import useViewAllButton from "@/hooks/useViewAllButton";

type ViewAllButtonProps = {
  subtext?: string;
  path: string;
};

const ViewAllButton: React.FC<ViewAllButtonProps> = ({ subtext, path }) => {
  const viewAllButton = useViewAllButton({ path });
  const handleViewAll = viewAllButton ? viewAllButton.handleViewAll : () => {};

  return (
    <>
      <div className="flex justify-end items-center">
        <ListSideHeader
          subtext={subtext}
          handleClick={handleViewAll}
          icon={<IoIosArrowForward />}
        />
      </div>
    </>
  );
};

export default ViewAllButton;
