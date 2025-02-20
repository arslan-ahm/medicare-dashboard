"use client"; // Ensuring it's a client component

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb: React.FC = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <nav aria-label="breadcrumb" className="text-gray-600 text-sm">
      <ul className="flex items-center space-x-2">
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;

          // Capitalizing each segment
          const formattedSegment =
            segment.charAt(0).toUpperCase() + segment.slice(1);

          return (
            <li key={path} className="flex items-center space-x-2">
              {!isLast ? (
                <>
                  <Link href={path} className="text-blue-600 hover:underline">
                    {decodeURIComponent(formattedSegment)}
                  </Link>
                  <span>/</span>
                </>
              ) : (
                <span className="text-gray-500">{decodeURIComponent(formattedSegment)}</span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
