export default function Button({
  onClick,
  children,
  type,
  size = 3,
  ...props
}) {
  if (type === "danger") {
    return (
      <button
        onClick={onClick}
        style={{
          paddingLeft: size * 3,
          paddingRight: size * 3,
          paddingTop: size * 1.5,
          paddingBottom: size * 1.5,
          fontSize: size * 5,
        }}
        className={
          `cursor-pointer text-white bg-red-700 hover:bg-red-800 focus:ring-1 focus:ring-red-300 rounded-sm focus:outline-none ` +
            props.className || ""
        }
        {...props}
      >
        {children}
      </button>
    );
  }

  if (type === "success") {
    return (
      <button
        onClick={onClick}
        style={{
          paddingLeft: size * 3,
          paddingRight: size * 3,
          paddingTop: size * 1.5,
          paddingBottom: size * 1.5,
          fontSize: size * 5,
        }}
        className={`cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 rounded-sm focus:outline-none  ${
          props.className || ""
        }`}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={props.disabled || false}
      style={{
        paddingLeft: size * 3,
        paddingRight: size * 3,
        paddingTop: size * 1.5,
        paddingBottom: size * 1.5,
        fontSize: size * 5,
      }}
      className={`cursor-pointer  rounded-sm focus:outline-none ${
        props.disabled
          ? "bg-gray-300 text-gray-700"
          : "bg-green-theme text-white"
      }
            ${props.className || ""}`}
    >
      {children}
    </button>
  );
}
