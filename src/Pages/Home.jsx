import { Banner } from "../Components/Banner";
import { LatestVisa } from "../Components/LatestVisa";

export const Home = () => {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <LatestVisa></LatestVisa>
      </section>
    </div>
  );
};
