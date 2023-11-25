export default function Footer() {
  return (
    <footer className='border-t text-center p-4 text-sm font-semibold bg-primary-100 text-primary-900 border-primary-200'>
      <p>Me &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}