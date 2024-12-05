"use client";

import React from "react";
import Image from "next/image";
import { CiMail } from "react-icons/ci";
import { RxExit } from "react-icons/rx";
import { IoNotificationsOutline } from "react-icons/io5";
import InputField from "../InputField";
import { IoIosSearch } from "react-icons/io";
import Text from "../Text";
import { IMAGES } from "@/constants/imgs";
import QuickIcon from "./QuickIcon";
import { TODAYS_DATE } from "@/constants/menu";
import Link from "next/link";
import { formatDate } from "@/utils/timeHandler";
import useNavbar from "./useNavbar";

const Navbar = () => {
  const {
    doctor,
    buttonRef,
    setIsNotificationShow,
    hasUnreadMessages,
    handleLogout,
    isNotificationShow,
    messages,
    position,
  } = useNavbar();

  return (
    <nav className="bg-white py-4 px-4 sm:px-6 flex justify-between items-center border-b border-gray-200 sticky top-0 left-0 w-full z-40">
      <div className="flex gap-2 items-center text-xl text-gray-500 font-bold sm:w-[30%] md:w-[20%]">
        <Image src={IMAGES.LOGO} width={40} height={40} alt="logo" />
        <span className="hidden sm:flex items-center">
          <Text text="Medicare" type="h2" className="sm:text-2xl lg:text-3xl" />
        </span>
      </div>

      <div className="flex justify-end lg:justify-between items-center space-x-4 sm:w-[70%] md:w-[80%]">
        <div className="hidden lg:flex max-w-[350px] xl:max-w-[70vh] w-[80%]">
          <InputField
            label={<IoIosSearch />}
            fieldType="search"
            inputType="secondary"
            placeholder="Search"
            value=""
            setValue={() => {}}
          />
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex flex-col items-end border-r-2 pr-[5px] border-r-light_gray">
            <p className="text-[13px] text-md_gray">{doctor?.name}</p>
            <p className="text-[14px] font-semibold">{doctor?.organization}</p>
          </div>

          <span className="hidden sm:inline-block border-2 rounded-md border-light_gray text-md_gray p-1 lg:px-3 lg:py-1 text-[11px] sm:text-[14px] sm:text-base ">
            {TODAYS_DATE}
          </span>

          <div className="flex  items-center text-gray-500 space-x-4 sm:space-x-6">
            <span className="hidden sm:flex items-center space-x-2">
              <QuickIcon
                icon={<CiMail />}
                cursor="not-allowed"
                handleClick={() => {}}
              />
            </span>
            <span className="relative" ref={buttonRef}>
              <QuickIcon
                icon={<IoNotificationsOutline />}
                handleClick={() => setIsNotificationShow((prev) => !prev)}
              />
              {hasUnreadMessages && !isNotificationShow && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-semibold rounded-full px-1">
                  {messages.length}
                </span>
              )}
            </span>
            <QuickIcon icon={<RxExit />} handleClick={handleLogout} />
          </div>
        </div>
      </div>
      {isNotificationShow && (
        <ul
          className="fixed max-h-[450px] overflow-y-auto custom-scroll bg-white shadow-md rounded-md border border-gray-200 z-50 w-40 p-4"
          style={{ top: position.top, left: position.left }}
        >
          {hasUnreadMessages ? (
            messages.map((msg, index) => (
              <li
                key={index}
                className="p-2 hover:bg-slate-50 cursor-pointer rounded-r-md border-l-2 mb-2 border-rose-500"
              >
                <Link href="/dashboard/notifications">
                  <p className="text-[12px] text-gray-500 font-medium">
                    {msg.title}
                  </p>
                  <span className="text-[8px] block text-end text-md_gray">
                    ({formatDate(msg.time)})
                  </span>
                </Link>
              </li>
            ))
          ) : (
            <li>
              <p className="text-[12px] font-semibold text-gray-500 capitalize">
                No notifications
              </p>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
