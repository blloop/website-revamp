export default function Container({ className, children }) {
  return <div className={"max-w-7xl mx-auto py-8 px-6 sm:px-12 " + (className || '')}>{children}</div>;
}
