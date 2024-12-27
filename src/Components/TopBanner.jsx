import banner from '../assets/TopBanner.jpg';

const TopBanner = (props) => {
  return (
    <div 
        className='h-[300px] relative -mt-12 bg-top bg-cover' 
        style={{backgroundImage: `url(${banner})`}}>
        <div className='inset-0 bg-black absolute opacity-50'></div>
        <div className='absolute top-1/2 md:left-[45%] left-[35%]'>
            <h1 className='text-white text-4xl font-bold font-serif'>{props.text}</h1>
        </div>
    </div>
  )
}

export default TopBanner