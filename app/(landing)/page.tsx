import SearchForm from '@/components/SearchForm';
import SectionTitle from '@/components/SectionTitle';
import Hero from '@/components/hero/Hero';
import JobList from '@/components/job/JobList';
import BaseLayout from '@/components/layouts/BaseLayout';
import { getJobs } from '@/sanity/schemas/actions';
import { Job } from '@/types';

type Props = {
  searchParams: { [key: string]: string | undefined };
};

export default async function HomePage({ searchParams }: Props) {
  const jobs: Job[] = await getJobs({
    query: searchParams?.query || '',
    category: searchParams?.category || '',
    page: '1',
  });

  return (
    <div className='bg-[#F2F7FB]'>
      <Hero />

      <div className='relative flex w-11/12 flex-col justify-between rounded-lg bg-white py-10 shadow-lg md:w-11/12 md:flex-row md:p-5 lg:w-8/12 -mt-10 max-w-3xl mx-auto'>
        <SearchForm />

        <div className='mx-2 flex flex-auto items-center md:mx-0 md:flex-none'>
          <button className='flex flex-auto justify-center rounded bg-[#FF5555] px-5 py-4 font-bold text-white md:py-3'>
            Find jobs
          </button>
        </div>
      </div>

      <BaseLayout>
        <SectionTitle title='Latest Jobs' />

        <div className='grid grid-cols-1 lg:grid-cols-2 mt-2 gap-8 pb-20'>
          {jobs?.length > 0 ? (
            jobs.map((job: Job) => <JobList key={job._id} job={job} />)
          ) : (
            <p className='text-lg mt-3 text-grayColor'>Oops, No Jobs Found</p>
          )}
        </div>
      </BaseLayout>
    </div>
  );
}
