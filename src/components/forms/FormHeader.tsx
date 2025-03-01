import React from "react";
import Text from "../Text";
import { FormHeaderProps } from "@/types/componentsTypes/form";


const FormHeader = ({ title, subhead, noLink = false }: FormHeaderProps) => {
  const isLogin = title?.toLowerCase().includes("login");
  return (
    <div>
      <Text text={title} type="h2" />
      {subhead && <Text text={subhead} type="span" />}

      {!noLink &&
        (isLogin ? (
          <Text text="Register" type="span" link="/register" />
        ) : (
          <Text text="Login" type="span" link="/login" />
        ))}
    </div>
  );
};

export default FormHeader;
