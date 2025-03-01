export type Tab = {
    id: string;
    label: string;
};

export type TabSwitcherProps = {
    tabs: Tab[];
    children: Record<string, React.ReactNode>;
};