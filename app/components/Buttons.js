export function DarkButton({ children }) {
  return (
    <DefaultButton style='bg-secondary-900 border-secondary-900 text-secondary-400 md:hover:bg-secondary-200 md:hover:text-secondary-900'>
      {children}
    </DefaultButton>
  );
}

export function LightButton({ children }) {
  return (
    <DefaultButton style='bg-transparent border-secondary-700 text-secondary-700 md:hover:bg-secondary-700 md:hover:text-secondary-400'>
      {children}
    </DefaultButton>
  );
}

function DefaultButton({ children, style }) {
  return (
    <button className={`inline font-mediumm border-2 rounded-full md:px-4 px-3.5 md:py-1 py-0.5 md:text-base text-sm transition-colors ${style}`}>
      {children}
    </button>
  )
}