import { useAppSelector } from "@/hooks/useRedux";

const useDonout = ()=>{
    const { patients } = useAppSelector((state) => state.patients);

  const maleCount = patients.filter(
    (patient) => patient.gender.toLowerCase() === "male"
  ).length;

  const femaleCount = patients.filter(
    (patient) => patient.gender.toLowerCase() === "female"
  ).length;

  const data = {
    labels: ["Male", "Female"],
    datasets: [
      {
        data: [maleCount, femaleCount],
        backgroundColor: ["rgb(47 128 237)", "rgb(235 87 87)"],
        hoverOffset: 4,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        mode: "nearest" as const,
        intersect: false,
        z: 9999,
      },
    },
    cutout: "75%",
    interaction: {
      mode: "nearest" as const,
      axis: "x" as const,
      intersect: true,
    },
  };

  return {
    data,
    options,
    maleCount,
    femaleCount,
  }
}

export default useDonout;