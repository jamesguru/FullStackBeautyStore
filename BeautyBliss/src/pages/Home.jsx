import Announcements from "../components/Announcements"
import Banner from "../components/Banner"
import Category from "../components/Category"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import SliderItem from "../components/Slider"
const Home = () => {
  return (
    <div>
        <Announcements />
        <Navbar />
        <Category />
        <Banner />
        <SliderItem />
        <Products />
        <Footer />
    </div>
  )
}

export default Home