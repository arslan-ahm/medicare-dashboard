"use client";

import IconButton from "./IconButton";
import { SETTINGS_HEADER } from "@/constants/pagebarActions";

const SettingsActions = () => {
  return (
    <ul className="flex space-x-2">
      {SETTINGS_HEADER.map(({ icon }, ind) => (
        <li className="cursor-not-allowed " key={ind}>
          <IconButton icon={icon} handleClick={() => {}} />
        </li>
      ))}
    </ul>
  );
};

export default SettingsActions;
