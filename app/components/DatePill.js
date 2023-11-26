import { format } from 'date-fns';

export default function DatePill({ date }) {
  return (
    <p className='text-xs font-medium px-2 py-1 rounded-full bg-secondary-200 text-secondary-600 inline'>
      {format(new Date(date), 'MMMM dd, yyyy')}
    </p>
  );
}
