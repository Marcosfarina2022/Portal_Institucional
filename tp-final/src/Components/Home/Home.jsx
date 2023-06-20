
import Content from "../Content/Content";
import Carousel from "../Carousel/Carousel";
import './Home.css'
import Sponsors from "../Sponsors/Sponsors";
import Cards from "../Cards/Cards";



const Home = () =>{
 return ( 
    <div className="home">
    <Carousel/>
    <div>
    <Cards/>
    <Sponsors/>
    </div>
    </div>) 
}  

export default Home  