// import Image from 'next/image';
// import Link from 'next/link';
import BaseLayout from '@/components/layouts/BaseLayout';

export default function HeroPage() {
  return (
    <section className='bg-[#0F4A7B] pt-20 lg:pt-36 py-24'>
      <BaseLayout>
        <div className='mt-10 flex flex-col items-center justify-center'>
          <div className='lg:w-7/12 w-full mx-auto'>
            <h1 className='text-3xl font-bold capitalize tracking-wider md:text-[64px] md:leading-tight text-white'>
              The Easiest Way To Get Your Job.
            </h1>

            <p className='mt-5 text-lg font-light !leading-normal tracking-wide text-white md:text-2xl'>
              Searching and finding your dream job is now easier. <br />
              Just browse a job and apply with ease on our platform.
            </p>
          </div>
        </div>
      </BaseLayout>
    </section>
  );
}
