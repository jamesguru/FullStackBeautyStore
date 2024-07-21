import Announcements from "../components/Announcements"
import Banner from "../components/Banner"
import Category from "../components/Category"
import Navbar from "../components/Navbar"
const Home = () => {
  return (
    <div>
        <Announcements />
        <Navbar />
        <Category />
        <Banner />
    </div>
  )
}

export default Home