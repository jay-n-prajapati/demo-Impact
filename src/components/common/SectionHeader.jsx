const SectionHeader = ({ title }) => {
  return (
    <div className="mb-12" data-aos="fade-up">
      <h1 className='text-2xl md:text-3xl xl:text-4xl font-extrabold text-center pb-5 after:content-[" "] relative after:absolute after:h-1 after:bg-accentColor after:w-14 after:bottom-0 after:left-1/2 after:-translate-x-1/2 font-montserrat-bold'>
        {title}
      </h1>
      <p className="mt-4 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
        assumenda.
      </p>
    </div>
  );
};

export default SectionHeader;
