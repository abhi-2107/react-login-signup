export default function Row({ className, children, center }) {
  return (
    <div className={`flex flex-col sm:flex-row gap-2 ${center ? "items-center" : ""} ${className}`}>
      {children}
    </div>
  );
}


