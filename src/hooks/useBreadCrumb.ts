import { usePathname } from "next/navigation";

const useBreadCrumb = () => {
    const pathname = usePathname();
    const pathSegments = pathname.split("/").filter((segment) => segment);

    return { pathSegments };
}

export default useBreadCrumb;