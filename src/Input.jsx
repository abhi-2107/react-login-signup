import { useState } from "react";

export default function Input({
  type = "text",
  placeholder = "",
  icon = null,
  iconPosition = "left", // "left" | "right"
  ...props
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="relative w-full">
      {/* Input */}
      <label
        className={`absolute transition-all text-sm text-green-800 pointer-events-none ${
          focused
            ? " translate-x-0 -translate-y-3 scale-75 "
            : "translate-x-3 translate-y-2"
        } `}
      >
        {placeholder}
      </label>
      <input
        type={type}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full  border-b-2 border-b-green-800 px-3 py-2 focus:outline-none  ${
          icon ? (iconPosition === "left" ? "pl-10" : "pr-10") : ""
        }`}
        {...props}
      />

      {/* Optional Icon */}
      {icon && (
        <span
          className={`absolute top-1/2 -translate-y-1/2 text-gray-400 ${
            iconPosition === "left" ? "left-3" : "right-3"
          }`}
        >
          {icon}
        </span>
      )}
    </div>
  );
}
