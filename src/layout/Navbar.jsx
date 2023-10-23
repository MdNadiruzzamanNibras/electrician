import { Link } from "react-router-dom";


const Navbar = () => {
    return (
      <div className="container mx-auto">
         <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">The Electrician</a>
  </div>
  <div className="flex-none mr-2 lg:mr-44">
    <ul className="menu menu-horizontal px-1">
      <Link to='/'><li className="lg:text-lg font-bold text-black mx-1 lg:mx-5">Home</li></Link>
      <Link to='/about'><li className="lg:text-lg font-bold text-black mx-1 lg:mx-5">About</li></Link>
      <Link to='/price'><li className="lg:text-lg font-bold text-black mx-1 lg:mx-5">Price</li></Link>
      <Link to='/contact'><li className="lg:text-lg font-bold text-black mx-1 lg:mx-5">Contact</li></Link>
    </ul>
  </div>
</div>
     </div>
    );
};

export default Navbar;