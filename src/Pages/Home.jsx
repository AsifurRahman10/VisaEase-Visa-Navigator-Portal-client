import { Banner } from "../Components/Banner";
import { LatestVisa } from "../Components/LatestVisa";
import { Testimonials } from "../Components/Testimonials";
import { WhyUs } from "../Components/WhyUs";

export const Home = () => {
  return (
    <div>
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
