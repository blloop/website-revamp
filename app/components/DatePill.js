import { format } from 'date-fns';

export default function DatePill({ date }) {
  return (
    <p className='text-xs font-medium px-2 py-1 w-fit rounded-full bg-secondary-200 text-secondary-600 inline'>
      {format(new Date(date || 'Wed Nov 01 2023 23:23:59 GMT-0800 (Pacific Standard Time)'), 'MMMM dd, yyyy')}
    </p>
  );
}
