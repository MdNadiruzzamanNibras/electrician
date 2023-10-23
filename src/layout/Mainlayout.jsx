import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Newsletter from "../Component/Home/Newsletter";


const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className=" ">
        <Outlet />
            </div>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;