import { useNavigate } from "react-router-dom";
import bgImage from "../UI_Images/background.svg";
import arrow from "../UI_Images/arrow.svg";
import mainImage from "../UI_Images/kings.png";

function Main() {
  const myStyles = {
    height: "80vh",
  };
  const navigate = useNavigate();
  return (
    <div className="w-full relative" style={myStyles}>
      <img
        className="w-screen h-full object-cover"
        src={bgImage}
        alt="background-image"
      ></img>
      <div className="bg-transparent w-full h-full flex justify-center z-10 absolute inset-0 text-white mt-24">
        <div className="flex flex-col items-center">
          <img className="w-30 h-28" src={mainImage} alt="logo"></img>
          <h1 className="font-mono text-6xl">CHECKMATE</h1>
          <p className="text-center text-xl font-mono mt-1">
            Play chess with your friends
          </p>
          <div className="mt-4">
            <button
              className="transition duration-500 ease-in-out px-4 py-3 bg-gradient-to-r from-[#c7f9cc] to-[#57cc99] transform hover:-translate-y-1 hover:scale-110  active:opacity-80 text-black text-xl rounded-lg mb-4"
              onClick={() => {
                navigate("/login");
              }}
            >
              Get Started
              <img className="h-5 inline mb-1 ml-1" src={arrow}></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
