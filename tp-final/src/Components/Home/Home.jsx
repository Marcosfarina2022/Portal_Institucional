import Carousel from "../Carousel/Carousel";
import "./Home.css";
import Sponsors from "../Sponsors/Sponsors";
import Cards from "../Cards/Cards";
import VideoPlayer from "../Video/Video";
const Home = () => {
  return (
    <main>
      <div className="home">
        <Carousel />
        <div>
          <Cards />
        </div>
        <Sponsors />
      </div>
    </main>
  );
};

export default Home;
