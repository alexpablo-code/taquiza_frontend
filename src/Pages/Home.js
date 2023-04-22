import BreakfastSec from "../components/BreakfastSec";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import HeroSec from "../components/HeroSec";
import InfoSec from "../components/InfoSec";
import NavBar from "../components/NavBar";
import Socials from "../components/Socials";

const Home = () => {
    return (
        <div>
            <NavBar/>
            <HeroSec/>
            <BreakfastSec/>
            <InfoSec/>
            <Gallery/>
            <Socials/>
            <Footer/>
        </div>
    );
}

export default Home;
