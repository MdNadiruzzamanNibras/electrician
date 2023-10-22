import { Link } from "react-router-dom";


const Navbar = () => {
    return (
      <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="flex-none mr-0 lg:mr-20">
    <ul className="menu menu-horizontal px-1">
      <Link to='/'><li>Home</li></Link>
      <Link to='/about'><li>About</li></Link>
    </ul>
  </div>
</div>
    );
};

export default Navbar;