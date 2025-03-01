export type QuickIconProps = {
  icon: React.ReactNode;
  handleClick: () => void;
  cursor?: "pointer" | "not-allowed";
};