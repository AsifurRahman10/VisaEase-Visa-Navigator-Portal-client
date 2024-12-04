import { Link, NavLink } from "react-router";
import logo from "../../public/logo-2.png";
import "animate.css";
export const Navbar = () => {
  const list = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:transition-all after:duration-300"
            : "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300"
        }
      >
        <li>Home</li>
      </NavLink>

      <NavLink
        to={"/allVisas"}
        className={({ isActive }) =>
          isActive
            ? "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:transition-all after:duration-300"
            : "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300"
        }
      >
        <li>All Visas</li>
      </NavLink>
      <NavLink
        to={"/addVisa"}
        className={({ isActive }) =>
          isActive
            ? "relative underline-offset-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:transition-all after:duration-300"
            : "relative underline-offset-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300"
        }
      >
        <li>Add Visa</li>
      </NavLink>
      <NavLink
        to={"/myAddedVisa"}
        className={({ isActive }) =>
          isActive
            ? "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:transition-all after:duration-300"
            : "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300"
        }
      >
        <li>My added visas</li>
      </NavLink>
      <NavLink
        to={"/myVisaApplication"}
        className={({ isActive }) =>
          isActive
            ? "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:transition-all after:duration-300"
            : "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300"
        }
      >
        <li>My Visa applications</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar px-10 shadow-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow lato text-lg text-gray-600 font-medium gap-6"
          >
            {list}
          </ul>
        </div>
        <a className="text-xl playfair flex justify-center items-center gap-2">
          <img className="w-24" src={logo} alt="" />
          <p className="text-4xl font-bold">
            <span className="text-primary">Visa</span>
            <span className="text-secondary">Ease</span>
          </p>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 lato text-lg text-gray-600 font-medium gap-6">
          {list}
        </ul>
      </div>
      <div className="navbar-end">
        <Link>
          <button className="relative btn bg-primary text-white font-bold text-lg lato rounded-[50px] w-40 h-12 overflow-hidden group">
            <span className="absolute inset-0 bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
            <span className="relative z-10">Login</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
