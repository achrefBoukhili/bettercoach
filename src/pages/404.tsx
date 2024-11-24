import type { NextPage } from 'next';
import Link from 'next/link';

const PageNotFound: NextPage = () => {
  return (
    <div className='absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-white'>
      <h1 className='font-bold text-gray-400 text-9xl animate__animated animate__bounce'>404</h1>
      <h2 className='text-3xl font-semibold'>Sorry, we couldn&apos;t find this page.</h2>
      <Link href='/'>
        <div className='mt-5 default-button'>Back to homepage</div>
      </Link>
    </div>
  )
}

export default PageNotFound;