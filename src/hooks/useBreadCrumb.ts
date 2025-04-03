import { usePathname } from "next/navigation";

const useBreadCrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);
  const CUSTOM_PATH_LIST: Record<string, string> = {
    patients: "Patient registerer",
    add: "Add patient",
  };

  const getRefinedPath = (pathSegments: string[]): string[] => {
    if (pathSegments.length === 1 && pathSegments[0] === "dashboard") {
      return ["Dashboard", "Summary"];
    }

    return pathSegments
      .filter((node) => node !== "dashboard")
      .map((node) => CUSTOM_PATH_LIST[node.toLowerCase()] || node);
  };

  const refinedPath =  getRefinedPath(pathSegments);

  return { refinedPath };
};

export default useBreadCrumb;
