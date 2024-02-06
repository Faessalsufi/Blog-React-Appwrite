import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-900",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-3 py-3 rounded-lg ${bgColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
