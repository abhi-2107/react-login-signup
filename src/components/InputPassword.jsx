import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import Input from "./Input";

export default function InputPassword(props) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Input
        {...props}
        icon={
          <Icon
            onClick={() => setShowPassword((s) => !s)}
            icon={showPassword ? "mdi-light:eye" : "mdi:eye-off-outline"}
            className=" rounded-full cursor-pointer "
          />
        }
        iconPosition="right"
        type={showPassword ? "text" : "password"}
      ></Input>
    </>
  );
}
