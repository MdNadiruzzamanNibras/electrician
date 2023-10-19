import AboutUs from "./AboutUs";
import Banner from "./Banner";
import FullService from "./FullService";
import Maintain from "./Maintain";
import RequestToday from "./RequestToday";


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
               
           
        </div>
    );
};

export default Home;