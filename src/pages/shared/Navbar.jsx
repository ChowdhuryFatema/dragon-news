import { Link, NavLink } from "react-router-dom";
import currentUser from '../../assets/user.png';
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import auth from "../../firebase/firebase.confige";


const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut(auth)
        .then(result => console.log(result))
        .catch(error => console.log(error))
    }

    const navLinks = <>
        <NavLink to='/' className='p-3 text-lg text-[#706F6F]'>Home</NavLink>
        <NavLink to='/about' className='p-3 text-lg text-[#706F6F]'>About</NavLink>
        <NavLink to='/career' className='p-3 text-lg text-[#706F6F]'>Career</NavLink>
        <NavLink to='/register' className='p-3 text-lg text-[#706F6F]'>Register</NavLink>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src={currentUser} />
                    </div>
                </div>
                {
                    user ? <Link to='/login' onClick={handleLogOut} className="btn bg-[#403F3F] text-white rounded-none text-lg px-10 ml-2">Logout</Link> :
                    <Link to='/login' className="btn bg-[#403F3F] text-white rounded-none text-lg px-10 ml-2">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;