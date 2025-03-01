import { TextProps } from "@/types/componentsTypes/text";
import Link from "next/link";
import React from "react";

const Text: React.FC<TextProps> = ({ text, className, type = "p", link }) => {
  const styles = {
    h1: "text-5xl",
    h2: "text-3xl text-gray-900",
    h3: "text-lg lg:text-2xl font-[500]",
    h4: "text-md sm:text-lg md:text-xl font-[500]",
    h5: "text-sm md:text-md lg:text-lg",
    h6: "text-md",
    p: "text-sm",
    span: "text-[13px]",
  };

  const linkStyles =
    "text-primary underline underline-offset-4 underlline-primary";
  const Tag = type;
  return link ? (
    <Link
      href={link}
      className={[styles[type], className, linkStyles]
        .filter(Boolean)
        .join(" ")}
    >
      {text}{" "}
    </Link>
  ) : (
    <Tag className={[styles[type], className].filter(Boolean).join(" ")}>
      {text}{" "}
    </Tag>
  );
};

export default Text;
