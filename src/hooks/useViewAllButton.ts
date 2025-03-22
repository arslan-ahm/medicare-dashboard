import { usePathname, useRouter } from "next/navigation";


const useViewAllButton = ({ path }: { path: string }) => {
    const router = useRouter();
    const currentPath = usePathname();

    if (currentPath === path) {
        return null;
    }

    const handleViewAll = () => {
        router.push(path);
    };

    return { handleViewAll };
}

export default useViewAllButton;