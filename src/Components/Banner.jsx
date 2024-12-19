import banner from '../assets/banner.jpg';
const Banner = () => {
  return (
    <div 
        className="h-[500px] relative flex items-center bg-cover bg-center bg-fixed"
        style={{backgroundImage: `url(${banner})`}}>
        <div className='bg-black inset-0 opacity-65 absolute'></div>   
        <div className='text-white flex-col flex items-center justify-center px-4 lg:px-0 text-center max-w-7xl mx-auto z-20'>
            <h2 className='lg:text-6xl text-4xl font-bold mb-6'>Ready to Start Your Adventure?</h2>
            <p className='text-xl mb-8'>Book your dream vacation today and create unforgettable memories.</p>
            <button className='bg-red-500 px-3 py-2 rounded-md text-white'>Start Planning</button>
        </div>
    </div>
  )
}

export default Banner