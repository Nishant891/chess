import SideBar from "../components/SideBar.jsx";
import chessGame from "../UI_Images/chess-game.png";
import chessPuzzle from "../UI_Images/chess-puzzle.png";
import goGame from "../UI_Images/go-game.png";
import rpsGame from "../UI_Images/rps-game.png";
import { useState, useEffect } from "react";
import Axios from "axios";
import { RoomGamesListItems, GamesListItems } from "../components/GameCards.jsx";

function Dashboard() {
  const [user, setUser] = useState(null);

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("http://localhost:8000/").then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <>
      <div className="h-screen width-screen flex justify-end">
        <SideBar />
        <div className="w-5/6 h-[150vh] bg-[#F5F7F8] text-white">
          <div className="w-full h-full flex flex-col justify-evenly items-center">
            <div className="w-full h-full flex justify-center items-center">
              <div className="bg-red-600 w-[160vh] h-[46vh] border border-black rounded-lg text-white flex flex-col justify-center items-center">
                <p className="text-3xl">
                  HOLA MIGOS! WE HAVE A CURE FOR YOUR BOREDOM
                </p>
                <ul class="list-disc text-xl mt-4">
                  <li>Hover over images to create rooms and play</li>
                  <li>This section will feature new Games</li>
                </ul>
              </div>
            </div>
            <div className="w-full h-full flex flex-row justify-evenly items-center">
                <RoomGamesListItems bgcolor={"bg-amber-300"} game={"Chess"} image={chessGame} />
                <RoomGamesListItems bgcolor={"bg-cyan-300"} game={"Go"} image={goGame} />
            </div>
            <div className="w-full h-full flex flex-row justify-evenly items-center">
                <GamesListItems bgcolor={"bg-teal-300"} game={"Chess Puzzle"} image={chessPuzzle} />
                <GamesListItems bgcolor={"bg-green-400"} game={"Rock Paper Scissors"} image={rpsGame} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
