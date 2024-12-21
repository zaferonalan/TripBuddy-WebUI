import Banner from "../Components/Banner"
import Contact from "../Components/Contact"
import FeatureDestination from "../Components/FeatureDestination"
import Features from "../Components/Features"
import GalleryComp from "../Components/GalleryComp"
import Hero from "../Components/Hero"

const Home = () => {
  return (
    <>
      <Hero/>
      <FeatureDestination/>
      <Features/>
      <GalleryComp/>
      <Banner/>
      <Contact/>
    </>
  )
}

export default Home