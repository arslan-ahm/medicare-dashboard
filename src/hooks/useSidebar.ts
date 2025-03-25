import { useEffect, useState } from "react";


const useSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);

        const handleResize = () => {
            const mobileView = window.innerWidth < 640;
            setIsMobile(mobileView);
            setIsOpen(window.innerWidth >= 1024);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return { isOpen, isMobile, hasMounted, setIsOpen };
}
export default useSidebar;