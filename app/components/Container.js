export default function Container({ className, children }) {
  return (
    <div
      className={`max-w-7xl mx-auto mt-16 flex flex-col gap-8 p-4 py-8 md:px-8 ${className || ""}`}
    >
      {children}
    </div>
  );
}
