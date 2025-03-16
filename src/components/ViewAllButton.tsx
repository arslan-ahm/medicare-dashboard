"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import ListSideHeader from "./(details)/lists/ListSideHeader";
import { IoIosArrowForward } from "react-icons/io";

type ViewAllButtonProps = {
  subtext?: string;
  path: string;
};

const ViewAllButton: React.FC<ViewAllButtonProps> = ({ subtext, path }) => {
  const router = useRouter();
  const currentPath = usePathname();

  if (currentPath === path) {
    return null;
  }

  const handleViewAll = () => {
    router.push(path);
  };

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
