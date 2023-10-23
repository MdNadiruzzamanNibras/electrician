import { Link } from "react-router-dom";


const Navbar = () => {
    return (
      <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="flex-none mr-2 lg:mr-44">
    <ul className="menu menu-horizontal px-1">
      <Link to='/'><li className="text-lg font-bold text-black mx-5">Home</li></Link>
      <Link to='/about'><li className="text-lg font-bold text-black mx-5">About</li></Link>
      <Link to='/price'><li className="text-lg font-bold text-black mx-5">Price</li></Link>
      <Link to='/contact'><li className="text-lg font-bold text-black mx-5">Contact</li></Link>
    </ul>
  </div>
</div>
    );
};

export default Navbar;