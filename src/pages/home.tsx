export const Home = () => {
  return (
    <>
      <div className='mt-10 flex items-center w-full xs:h-32 h-28 p-3 bg-slate-900'>
        <img
          className='object-cover overflow-visible w-40'
          src='/assets/macarons.png'
          alt='macarons'
        />
        <div className='xs:text-left text-center'>
          <h1 className='xs:text-xl text-lg font-semibold'>Unique flavors</h1>
          <h1 className='xs:text-base text-xs'>
            Prepared with selected ingredients
          </h1>
        </div>
      </div>
    </>
  );
};
