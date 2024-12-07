import { Link, NavLink } from "react-router";
import logo from "../../public/logo-2.png";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { themeContext } from "../Provider/ModeProvider";
export const Navbar = () => {
  const { user, signOutUI } = useContext(AuthContext);
  const { handleMode, darkMode } = useContext(themeContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSignOut = () => {
    signOutUI();
  };
  const list = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:transition-all after:duration-300 dark:text-white"
            : "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 dark:text-white"
        }
      >
        <li>Home</li>
      </NavLink>

      <NavLink
        to={"/allVisas"}
        className={({ isActive }) =>
          isActive
            ? "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:transition-all after:duration-300 dark:text-white"
            : "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 dark:text-white"
        }
      >
        <li>All Visas</li>
      </NavLink>
      <NavLink
        to={"/addVisa"}
        className={({ isActive }) =>
          isActive
            ? "relative underline-offset-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:transition-all after:duration-300 dark:text-white"
            : "relative underline-offset-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 dark:text-white"
        }
      >
        <li>Add Visa</li>
      </NavLink>
      <NavLink
        to={"/myAddedVisa"}
        className={({ isActive }) =>
          isActive
            ? "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:transition-all after:duration-300 dark:text-white"
            : "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 dark:text-white"
        }
      >
        <li>My added visas</li>
      </NavLink>
      <NavLink
        to={"/myAppliedVisa"}
        className={({ isActive }) =>
          isActive
            ? "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:transition-all after:duration-300 dark:text-white"
            : "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 dark:text-white"
        }
      >
        <li>My Visa applications</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar px-2 md:px-10 shadow-xl dark:bg-[#121212]">
      <div className="navbar-start">
        <Link to={"/"}>
          <span
            className="text-xl playfair flex justify-center items-center gap-2"
            data-aos="fade-up"
          >
            <img className="w-20 md:w-24 ml-10 md:ml-0" src={logo} alt="" />
            <p className="text-2xl md:text-4xl font-bold">
              <span className="text-primary">Visa</span>
              <span className="text-secondary">Ease</span>
            </p>
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal px-1 lato text-lg text-gray-600 font-medium gap-6">
          {list}
        </ul>
      </div>
      <div className="navbar-end">
        {/* dark mode toggle btn */}
        <div className="form-control mr-6">
          <label className="label cursor-pointer">
            <span className="label-text mr-4 text-lg font-semibold dark:text-white">
              {darkMode ? "Light mode" : "Dark Mode"}
            </span>
            <input
              type="checkbox"
              className="toggle"
              onChange={handleMode}
              checked={darkMode}
            />
          </label>
        </div>
        {user?.photoURL ? (
          <div className="relative cursor-pointer mr-0 md:mr-6 lg:mr-20">
            <div className="group">
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-14 md:w-20 rounded-full ring ring-offset-2">
                  <img
                    src={user?.photoURL}
                    alt="User Avatar"
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <div className="invisible absolute translate-x-12 lg:translate-x-16 z-50 flex w-52 flex-col bg-primary py-1 px-4 text-gray-800 shadow-xl group-hover:visible right-0 rounded-lg items-center">
                <p className="my-2 block border-gray-100 py-1 font-semibold text-white md:mx-2">
                  User name : {user.displayName}
                </p>
                <button
                  onClick={handleSignOut}
                  className="relative btn bg-primary text-white font-bold text-lg lato rounded-[50px] w-40 h-12 overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                  <span className="relative z-10">Logout</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center gap-6">
            <Link to={"/login"} className="hidden lg:block">
              <button className="relative btn bg-primary text-white font-bold text-lg lato rounded-[50px] w-40 h-12 overflow-hidden group">
                <span className="absolute inset-0 bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                <span className="relative z-10">Login</span>
              </button>
            </Link>
            <Link to={"/register"} className="hidden lg:block">
              <button className="relative btn bg-primary text-white font-bold text-lg lato rounded-[50px] w-40 h-12 overflow-hidden group">
                <span className="absolute inset-0 bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                <span className="relative z-10">Register</span>
              </button>
            </Link>
          </div>
        )}
        <div className="dropdown block lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={handleMode}
          >
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
          {isDropdownOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 right-6 z-50 mt-3 w-52 p-2 shadow lato text-lg text-gray-600 font-medium gap-2"
            >
              {list}
              {!user && (
                <div className="flex justify-center flex-col items-center">
                  <Link to={"/login"} className="w-full">
                    <button className="relative btn bg-primary text-white font-bold text-lg lato rounded-lg w-full lg:w-40 h-12 overflow-hidden group">
                      <span className="absolute inset-0 bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                      <span className="relative z-10">Login</span>
                    </button>
                  </Link>
                  <Link to={"/register"} className="w-full">
                    <button className="relative btn bg-primary text-white font-bold text-lg lato rounded-lg w-full lg:w-40 h-12 overflow-hidden group">
                      <span className="absolute inset-0 bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                      <span className="relative z-10">Register</span>
                    </button>
                  </Link>
                </div>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
