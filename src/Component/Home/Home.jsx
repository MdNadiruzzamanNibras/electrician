import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Client from "./Client";
import FullService from "./FullService";
import Maintain from "./Maintain";
import OurProject from "./OurProject";
import RequestToday from "./RequestToday";
import Statistics from "./Statistics";


const Home = () => {
    return (
        <div >
             <Banner />
            
                <RequestToday></RequestToday>
                <div>
                <AboutUs></AboutUs>
               
            </div>
             
                <FullService></FullService>
                <Maintain></Maintain>
            <OurProject></OurProject>
            <Statistics></Statistics>
            <Client></Client>
           
        </div>
    );
};

export default Home;