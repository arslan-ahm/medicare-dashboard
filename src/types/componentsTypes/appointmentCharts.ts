export type AppointmentChartProps = {
    title: string;
    value: string;
    percentage?: string;
    type?: "success" | "loss";
    containerStyles?: string;
    children?: React.ReactNode;
  };