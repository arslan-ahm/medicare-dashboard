"use client";

import { IoHelpCircleOutline } from "react-icons/io5";
import IconButton from "./IconButton";

const SettingsActions = () => {
  const SettingsHeaderComponents = [
    {
      icon: <IoHelpCircleOutline className="text-xl" />,
      handleClick: () => {},
    },
  ];

  return (
    <ul className="flex space-x-2">
      {SettingsHeaderComponents.map(({ icon, handleClick }, ind) => (
        <li className="cursor-not-allowed " key={ind}>
          <IconButton icon={icon} handleClick={handleClick} />
        </li>
      ))}
    </ul>
  );
};

export default SettingsActions;
