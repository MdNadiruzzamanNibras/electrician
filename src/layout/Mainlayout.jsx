import { Outlet } from "react-router-dom";
import Footer from "./Footer";
// import Navbar from "./Navbar";


const Mainlayout = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <div className=" ">
        <Outlet />
      </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;