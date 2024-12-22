import footerImg from '../assets/footer-pattern.jpg';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 bg-bottom bg-cover" style={{backgroundImage: `url(${footerImg})`}}>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          <div>
            <h1 className='font-bold text-4xl mb-4'><span className='text-red-500'>Trip</span>Buddy</h1>
            <p>We're dedicated to making your travel dreams come true with expertly curated tours and unforgettable experiences.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer