import { Typewriter } from "react-simple-typewriter";

export const BannerTitle = () => {
  return (
    <div>
      <p className="font-bold">
        You trust{" "}
        <span className="text-secondary">
          <Typewriter
            typeSpeed={75}
            cursor={true}
            loop={true}
            cursorBlinking={true}
            words={["is our motivation"]}
          ></Typewriter>
        </span>
      </p>
    </div>
  );
};
