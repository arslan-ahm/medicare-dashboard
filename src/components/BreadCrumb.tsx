"use client";
import useBreadCrumb from "@/hooks/useBreadCrumb";
import Link from "next/link";

const Breadcrumb: React.FC = () => {
  const { refinedPath } = useBreadCrumb();

  return (
    <nav aria-label="breadcrumb" className="text-gray-600 text-sm">
      <ul className="flex items-center space-x-2">
        {refinedPath.map((segment, index) => {
          const path = `/${refinedPath.slice(0, index + 1).join("/")}`;
          const isLast = index === refinedPath.length - 1;

          const formattedSegment =
            segment.charAt(0).toUpperCase() + segment.slice(1);

          return (
            <li key={path} className="flex items-center space-x-2">
              {!isLast ? (
                <>
                  <Link href={path} className="text-blue-600 hover:underline">
                    {decodeURIComponent(formattedSegment)}
                  </Link>
                  <span>&gt;</span>
                </>
              ) : (
                <span className="text-gray-500">
                  {decodeURIComponent(formattedSegment)}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
