

const useLineChart = ({ type, chartData }: {
    type: "success" | "loss";
    chartData: number[];
}) => {
    const createGradient = (
        ctx: CanvasRenderingContext2D,
        type: "success" | "loss"
    ) => {
        const colors =
            type === "success"
                ? [
                    "rgba(47, 128, 237, 1)",
                    "rgba(47, 128, 237, 0.2)",
                    "rgba(47, 128, 237, 0)",
                ]
                : [
                    "rgba(235, 87, 87, 1)",
                    "rgba(235, 87, 87, 0.2)",
                    "rgba(235, 87, 87, 0)",
                ];

        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, colors[0]);
        gradient.addColorStop(0.3, colors[1]);
        gradient.addColorStop(1, colors[2]);

        return gradient;
    };

    const data = {
        labels: ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"],
        datasets: [
            {
                label: "Online Consultations",
                data: chartData,
                borderColor:
                    type === "success" ? "rgb(47 128 237)" : "rgb(235, 87, 87)",
                borderWidth: 2,
                fill: true,
                backgroundColor: (context: {
                    chart: { ctx: CanvasRenderingContext2D };
                }) => {
                    return createGradient(context.chart.ctx, type);
                },
                pointRadius: 0,
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                enabled: true,
                mode: "index" as const,
                intersect: false,
            },
        },
        interaction: {
            mode: "index" as const,
            axis: "x" as const,
            intersect: false,
        },
        scales: {
            x: { display: false },
            y: { display: false },
        },
    };

    return {
        data,
        options,
    }
}

export default useLineChart;