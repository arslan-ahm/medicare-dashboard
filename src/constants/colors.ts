export const COLORS = {
  PRIMARY: "#0000ac",
  MEDIUM_GRAY: "#828282",
  LIGHT_GRAY: "#e0e0e0",
  RED: "#eb5757",
  MEDIUM_VARIANT_RED: "#ffc5c5",
  LIGHT_VARIANT_RED: "#fbdddd",
  GREEN: "#27ae60",
  MEDIUM_VARIANT_GREEN: "#d8ffe8",
  LIGHT_VARIANT_GREEN: "#d4efdf",
  BLUE: "#2f80ed",
  MEDIUM_VARIANT_BLUE: "#c6defe",
  LIGHT_VARIANT_BLUE: "#d5e6fb",
  YELLOW: "#eacb68",
  MEDIUM_VARIANT_YELLOW: "#fff3cd",
  LIGHT_VARIANT_YELLOW: "#f9f1d8",
};

export const STATUS_COLORS: Record<
  string,
  { text: string; bg: string; border: string; hoverBg: string }
> = {
  Pending: {
    text: "text-red",
    bg: "bg-md_varient_red",
    border: "bg-red",
    hoverBg: "bg-light_varient_red",
  },
  Completed: {
    text: "text-green",
    bg: "bg-md_varient_green",
    border: "bg-green",
    hoverBg: "bg-light_varient_green",
  },
  InProgress: {
    text: "text-blue",
    bg: "bg-md_varient_blue",
    border: "bg-blue",
    hoverBg: "bg-light_varient_blue",
  },
  Rescheduled: {
    text: "text-yellow",
    bg: "bg-md_varient_yellow",
    border: "bg-yellow",
    hoverBg: "bg-light_varient_yellow",
  },
};

export const PATIENT_STATUS_COLOR: { [key: string]: string } = {
  recovered: "bg-md_varient_green text-green",
  "awaiting surgery": "bg-md_varient_blue text-blue",
  "on treatment": "bg-md_varient_red text-red",
  "on going": "bg-md_varient_yellow text-yellow",
};
