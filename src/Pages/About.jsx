import TopBanner from "../Components/TopBanner"
import time from '../assets/fire-time.gif';
import trip from '../assets/trip.gif';
import price from '../assets/best-price.gif';

const About = () => {
  return (
    <div>
      <TopBanner text='About'/>
      <div className="max-w-7xl mx-auto my-10">
        <div className="flex flex-col md:flex-row px-4 md:px-0 gap-4">
          <div className="flex-1">
            <div className="relative">
              <img src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600" alt="travel" className="rounded-lg"/>
              <div className="absolute bottom-[45%] right-0 p-4 bg-red-500 text-white font-bold md:text-4xl rounded-lg">
                HOW WE ARE BEST <br />FOR TRAVEL!
              </div>

            </div>
            <h1 className="md:text-4xl font-bold mt-6 mb-4 text-3xl">How We Are Best For Travel</h1>
            <p className="text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque saepe sint, 
              laboriosam quos totam similique consequatur est quasi distinctio! Dolor eum consequuntur 
              facere sint quisquam porro animi placeat veniam tenetur rerum laborum blanditiis dolorem quos fuga provident, 
              quod debitis necessitatibus quibusdam a, atque rem numquam ipsa inventore. Iste nam dicta dolore corporis, 
              quo doloribus consectetur nemo distinctio cumque maxime expedita repudiandae fugit atque minima! Unde aspernatur 
              iusto vitae hic quisquam asperiores perspiciatis harum. Qui reiciendis cumque eum! In repellendus minus quisquam eligendi,
              impedit ullam animi veniam autem, nulla alias quia cumque sint ratione possimus voluptas modi dolorem. Praesentium magnam 
              totam officiis voluptate nisi sed, provident perferendis, labore repudiandae voluptates suscipit doloribus cupiditate sit 
              distinctio minima debitis nihil. Autem qui quam inventore nihil facere. Facere, nam.
            </p>
          </div>
          <div className="flex-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-start mb-4">
                <img src={trip} alt="" className="w-20"/>
                <div>
                  <h2 className="ml-2 text-2xl font-semibold mb-1">50+ Destination</h2>
                  <p className="text-gray-700 ml-2 lg:mr-28">We offer the best travel experiences with personalized services and unbeatable prices.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 my-4 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-start mb-4">
                <img src={price} alt="" className="w-20"/>
                <div>
                  <h2 className="ml-2 text-2xl font-semibold mb-1">Best Price</h2>
                  <p className="text-gray-700 ml-2 lg:mr-28">We offer the best travel experiences with personalized services and unbeatable prices.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-start mb-4">
                <img src={time} alt="" className="w-20"/>
                <div>
                  <h2 className="ml-2 text-2xl font-semibold mb-1">Super Fast Booking</h2>
                  <p className="text-gray-700 ml-2 lg:mr-28">We offer the best travel experiences with personalized services and unbeatable prices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About