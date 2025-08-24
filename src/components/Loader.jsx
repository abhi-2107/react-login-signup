export default function Loader({
  type,
  size = 1,
  shimmerWidths = ["100%", "100%", "100%"],
}) {
  if (type === "indeterminate") {
    return (
      <div
        style={{ height: size }}
        className="w-full relative bg-gray-200 overflow-hidden"
      >
        <div className="progress w-full h-full bg-pink-500 origin-left-right"></div>
      </div>
    );
  } else if (type === "shimmer") {
    return (
      <div style={{ gap: size * 2 }} className="flex flex-col">
        {shimmerWidths.map((width, i) => (
          <div
            key={i}
            style={{
              height: size * 2,
              width,
            }}
            className="rounded-lg bg-gray-200 animate-pulse"
          ></div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center ">
      <div
        style={{ height: size * 8, width: size * 8, borderWidth: size }}
        className="lue-500 border-t-transparent rounded-full animate-spin"
      ></div>
    </div>
  );
}
