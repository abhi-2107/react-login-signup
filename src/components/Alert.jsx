import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import Row from "./Row";

const typeStyles = {
  success: "bg-green-100 text-green-800 border-green-300",
  error: "bg-red-100 text-red-800 border-red-300",
  warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
  info: "bg-blue-100 text-blue-800 border-blue-300",
};

export default function Alert({ type = "info", children, closable = false }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className={`flex items-center justify-between px-4 py-2 border rounded ${typeStyles[type]}`}
    >
      <Row className={"items-center"}>
        {type === "info" && <Icon icon="oui:nav-info" />}
        {type === "success" && <Icon icon="oui:check-in-circle-filled" />}
        {(type === "error" || type === "warning") && <Icon icon="oui:alert" />}
        <span className="text-sm">{children}</span>
      </Row>
      {closable && (
        <button
          onClick={() => setVisible(false)}
          className="ml-2 text-xl leading-none focus:outline-none"
        >
          &times;
        </button>
      )}
    </div>
  );
}
