import advice from "../assets/advice-blue.png";
import user from "../assets/user-friendly.png";
import approval from "../assets/approval.png";
import plane from "../assets/plane.jpg";
import passport from "../assets/passport.jpg";
import happy from "../assets/happy.jpg";
import avater1 from "../assets/a-1.jpg";
import avater2 from "../assets/a-2.jpg";
import avater3 from "../assets/a-3.jpg";
import avater4 from "../assets/a-4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
export const WhyUs = () => {
  return (
    <div className="py-10 md:py-20 dark:bg-[#121212]">
      <div className="flex flex-col lg:flex-row justify-between items-center w-11/12 lg:w-9/12 mx-auto lato">
        <div className="flex-1" data-aos="fade-right">
          <div className="text-center lg:text-left">
            <p className="text-xl font-semibold text-primary">Why choice us</p>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-4 dark:text-white">
              Some reason why you trust VisaEase
            </h2>
            <p className="text-gray-600 text-lg mt-2  dark:text-gray-300">
              VisaEase is your trusted partner for hassle-free visa solutions.
              With expert guidance, reliable support, and a user-friendly
              process, we make your journey seamless from start to finish.
            </p>
          </div>
          <div className="flex gap-4 mt-8">
            <img className="w-20 h-20" src={advice} alt="" />
            <div>
              <h3 className="text-3xl font-bold dark:text-white">
                Expert Guidance
              </h3>
              <p className="text-xl text-gray-500 mt-4 dark:text-gray-300">
                Our experienced professionals provide accurate and personalized
                assistance for all your visa needs
              </p>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <img className="w-20 h-20" src={user} alt="" />
            <div>
              <h3 className="text-3xl font-bold dark:text-white">
                Streamlined Process
              </h3>
              <p className="text-xl text-gray-500 mt-4  dark:text-gray-300">
                Enjoy a hassle-free experience with our user-friendly platform
                designed for quick and easy applications
              </p>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <img className="w-20 h-20" src={approval} alt="" />
            <div>
              <h3 className="text-3xl font-bold dark:text-white">
                High Visa Approval Rate
              </h3>
              <p className="text-xl text-gray-500 mt-4 dark:text-gray-300">
                Proudly maintaining a proven track record of successful visa
                applications
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative col-span-2">
              <img
                src={plane}
                alt="Happy Customers"
                className="rounded-lg object-cover w-full h-full"
                data-aos="fade-down-left"
              />
              <div className="absolute -bottom-10 left-4 bg-primary text-white px-4 py-2 rounded-lg shadow-lg">
                <h2 className="text-lg font-bold">1M+ Trusted Customers</h2>
                <div className="flex items-center mt-2">
                  <img
                    src={avater1}
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img
                    src={avater2}
                    className="w-8 h-8 rounded-full border-2 border-white -ml-2"
                  />
                  <img
                    src={avater3}
                    className="w-8 h-8 rounded-full border-2 border-white -ml-2"
                  />
                  <img
                    src={avater4}
                    className="w-8 h-8 rounded-full border-2 border-white -ml-2"
                  />
                </div>
              </div>
            </div>

            <div className="grid col-span-2 md:col-span-2 lg:col-span-1 grid-cols-1 gap-4 w-full">
              <img
                src={passport}
                className="rounded-lg w-full h-full"
                data-aos="fade-up-right"
              />
              <img
                src={happy}
                className="rounded-lg w-full h-full"
                data-aos="fade-up-left"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
