import { Banner } from "../Components/Banner";
import { LatestVisa } from "../Components/LatestVisa";
import { Testimonials } from "../Components/Testimonials";
import { WhyUs } from "../Components/WhyUs";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

AOS.init();

export const Home = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Home - VisaEase</title>
        </Helmet>
      </HelmetProvider>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <LatestVisa></LatestVisa>
      </section>
      <section>
        <Testimonials></Testimonials>
      </section>
      <section>
        <WhyUs></WhyUs>
      </section>
    </div>
  );
};
