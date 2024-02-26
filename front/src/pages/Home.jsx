
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Categories from '../components/categories/Categories'
import Tutorials from "../components/tutorials/Tutorials";
import { useNavigate } from 'react-router-dom'
import VideoList from '../components/videolist/VideoList';
import Novedades from '../components/novedades/Novedades';


const Home = () => {
  // If the user is already login we should redirect them to the desired page
  const navigate = useNavigate()

    // useEffect(() => {
    //   const user = JSON.parse(localStorage.getItem("userInfo"));
    //   if (user) {
    //     navigate("/");
    //   }
    // });

  return (
    <div className='scroll-smooth '>
     <Header/>
     <Categories/>
     <Novedades/>
     <VideoList/>
      <Footer/>
    </div>
  )
}

export default Home