import { Link, useLocation, useNavigate } from "react-router";
import passport from "../assets/passport.jpg";
import { useContext, useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Navbar } from "../Components/Navbar";
export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();
  const { setLoading, googleLogin, emailLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleShowPass = () => {
    setShowPassword(!showPassword);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    emailLogin(email, password)
      .then((res) => {
        if (location.state) {
          return navigate(location.state.from);
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        setLoading(false);
        const message = err.message.split("(")[1].split(")")[0];
        setError(message[1]);
      });
  };
  const handleGoogleLogin = () => {
    googleLogin().then((res) => {
      if (location.state) {
        return navigate(location.state.from);
      } else {
        navigate("/");
      }
    });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex box-border justify-center items-center py-6">
        <HelmetProvider>
          <Helmet>
            <title>Login - VisaEase</title>
          </Helmet>
        </HelmetProvider>
        <div className="rounded-2xl flex max-w-5xl p-5 items-center">
          <div className="md:w-1/2 px-8">
            <h2 className="font-bold text-3xl text-primary">Login</h2>
            <p className="text-sm mt-4 text-gray-600">
              If you already a member, easily log in now.
            </p>

            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <input
                className="p-2 mt-8 rounded-xl border"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                  onClick={handleShowPass}
                >
                  {showPassword ? <FaEye /> : <FaRegEyeSlash />}
                </button>
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                className="relative btn bg-primary text-white font-bold text-lg lato rounded-xl w-full overflow-hidden group"
              >
                <span className="absolute inset-0 bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                <span className="relative z-10">Login</span>
              </button>
            </form>
            <div className="mt-6  items-center text-gray-100">
              <hr className="border-gray-300" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-300" />
            </div>
            <button
              onClick={handleGoogleLogin}
              className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-[#60a8bc4f] font-medium"
            >
              <svg
                className="mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="25px"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              Login with Google
            </button>
            <div className="mt-10 text-sm border-b border-gray-500 py-5 playfair tooltip">
              Forget password?
            </div>

            <div className="mt-4 text-sm flex justify-between items-center container-mr">
              <p className="mr-3 md:mr-0 ">If you don't have an account..</p>
              <Link to={"/register"}>
                <button className="relative btn bg-primary text-white font-bold text-lg lato rounded-xl     overflow-hidden group">
                  <span className="absolute inset-0 bg-secondary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                  <span className="relative z-10">Register</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="md:block hidden w-1/2">
            <img
              className="rounded-2xl max-h-[1600px]"
              src={passport}
              alt="login form image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
