
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";
import './Home.css'



const Home = () =>{
 return ( 
    <div className="home">
    {/* <div><Header></Header></div> lo comento porque se duplica al navegar */}
    <div><Content></Content></div>
    <div><Footer></Footer></div>


    </div>) 
}  

export default Home  