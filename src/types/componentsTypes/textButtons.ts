export type ButtonProps = {
    variant?: "outline" | "filled";
    text: string;
    type?: "submit" | "button";
    onClick?: (() => void);
    className?: string;
  };
