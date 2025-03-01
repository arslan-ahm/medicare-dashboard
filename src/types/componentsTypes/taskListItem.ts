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
  };
  