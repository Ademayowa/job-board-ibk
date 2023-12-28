/* Layout for all components inside the components folder */
export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className='max-w-7xl mx-auto md:px-20 px-5'>{children}</div>;
}
