export type MenuItem = {
  label: string;
  icon: React.ReactNode;
  link: string;
  noti?: number;
};


export type SidebarSectionProps = {
    title: string;
    items: MenuItem[];
    toShow?: boolean | null;
  };

  
export type SidebarItemProps = {
    label: string;
    icon: React.ReactNode;
    link: string;
    handleText?: boolean | null;
    noti?: number;
  }
  