export type ModelInterfaceProps = {
  header?: boolean
  title: string;
  open: boolean;
  setOpen: (val: boolean) => void;
  children: React.ReactNode;
};
