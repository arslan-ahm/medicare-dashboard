

export type TaskListItemProps = {
    id: string;
    status: boolean;
    title: string;
    description?: string;
    date: string;
}

export type OptionButtonProps = {
    id: string;
    text: string;
    type: "edit" | "delete";
    handleClick: () => void;
};


export type TaskFormEditProp = {
    id: string;
    title: string;
    description: string;
    date: string;
    status: boolean;
};