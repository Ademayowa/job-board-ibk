'use client';

// import { useState, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
// import { formUrlQuery } from '@/sanity/schemas/utils';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import BaseLayout from '@/components/layouts/BaseLayout';

export default function SearchForm() {
  return (
    <div className='flex flex-1 items-center space-x-2'>
      <HiOutlineLocationMarker className='ml-4 hidden h-5 w-5 text-[#4BBCEF] md:block' />
      <input
        // value={search}
        // onChange={(e) => setSearch(e.target.value)}
        type='text'
        placeholder='Search for jobs'
        className='mb-4 !mr-3 h-16 w-full rounded-md border border-slate-500 bg-transparent pl-5 leading-10 outline-none md:mb-0 md:h-auto md:border-none md:pl-0'
      />
    </div>
  );
}
