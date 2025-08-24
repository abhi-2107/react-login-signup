export default function Col({ className, center, children }) {
  return (
    <div
      className={`flex w-full flex-col gap-2 ${
        center ? "justify-center" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
