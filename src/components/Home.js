import BreakfastSec from "./BreakfastSec";
import Footer from "./Footer";
import Gallery from "./Gallery";
import HeroSec from "./HeroSec";
import InfoSec from "./InfoSec";
import NavBar from "./NavBar";
import Socials from "./Socials";

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
