type Props = {
  title: string;
};

export default function SectionTitle({ title }: Props) {
  return (
    <div className='mt-24 lg:mt-40'>
      <h2 className='text-blueColor text-xl lg:text-3xl font-bold'>{title}</h2>
    </div>
  );
}
