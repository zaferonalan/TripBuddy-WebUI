import LightGallery from 'lightgallery/react';
import Tokyo from '../assets/Tokyo.jpg';
import India from '../assets/India.jpg';
import Hero1 from '../assets/Hero1.jpg';
import Hero2 from '../assets/Hero2.jpg';
import Hero3 from '../assets/Hero3.jpg';
import Hero4 from '../assets/Hero4.jpg';
import Bali from '../assets/Bali.jpg';
import Venice from '../assets/Venice.jpg';
import Paris from '../assets/Paris.jpg';

import './Css/Gallery.css';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';


const GalleryComp = () => {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  return (
    <div className="max-w-7xl mx-auto mb-16 px-4 md:px-0 mt-6">
      <div className="">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-3 font-serif">Our Gallery</h2>
        <hr className='text-red-500 w-[200px] mb-10 bg-red-500 mx-auto h-1'/>
      </div>

      <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href={India}>
                    <img alt="img1" src={India} />
                </a>
                <a href={Hero1}>
                    <img alt="img2" src={Hero1} />
                </a>
                <a href={Hero2}>
                    <img alt="img2" src={Hero2} />
                </a>
                <a href={Hero3}>
                    <img alt="img2" src={Hero3} />
                </a>
                <a href={Hero4}>
                    <img alt="img2" src={Hero4} />
                </a>
                <a href={Bali}>
                    <img alt="img2" src={Bali} />
                </a>
                <a href={Venice}>
                    <img alt="img2" src={Venice} />
                </a>
                <a href={Paris}>
                    <img alt="img2" src={Paris} />
                </a>
                <a href={Tokyo}>
                    <img alt="img2" src={Tokyo} />
                </a>
            </LightGallery>
        </div>

    </div>
  )
}

export default GalleryComp