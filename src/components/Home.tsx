import { assets } from "../assets/assets";
import { useContext } from "react";
import { BackgroundColorContext, TextColorContext } from "../App";

const Home = () => {
  const bgColor = useContext(BackgroundColorContext);
  const textColor = useContext(TextColorContext);
  return (
    <>
      <div
        id="Home"
        className="w-full min-h-[75vh] h-full flex items-center"
        style={{
          backgroundColor: bgColor,
          color: textColor,
          transition: "all 0.3s ease",
        }}
      >
        <div className="max-w-[75%] h-full mx-auto flex justify-around items-center p-3 gap-10 flex-col lg:flex-row-reverse">
          <img
            className="w-100 rounded-full drop-shadow-2xl"
            src={assets.PreviewImage}
            alt=""
          />
          <div className="text-xl lg:max-w-[45%] md:text-3xl sm:text-2xl">
            <h1>Hi! I'm Artem Havryliuk</h1>
            <h2 className="text-xl md:text-3xl sm:text-2xl">
              I'm a <span className="text-cyan-500">frontend</span> developer
            </h2>
            <p className="text-lg md:text-2xl sm:text-xl">
              I am currently studying at KPI (Kiev Polytechnic Institute) in
              Kiev, Ukraine, in Information systems and technologies. I am
              looking forward to having experience in commercial projects or as
              a developer to improve my skills in coding, design and
              user-centered solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
