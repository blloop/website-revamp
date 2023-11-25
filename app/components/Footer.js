export default function Footer() {
  return (
    <footer className='border-t text-center p-4 text-sm font-semibold bg-primary-200 text-primary-900 border-primary-900'>
      <p>Me &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}