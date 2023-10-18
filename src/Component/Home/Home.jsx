import Banner from "./Banner";
import RequestToday from "./RequestToday";


const Home = () => {
    return (
        <div >
            <Banner />
            <div className="px-3 lg:max-w-7xl mx-auto ">
            <RequestToday></RequestToday>
            </div>
        </div>
    );
};

export default Home;