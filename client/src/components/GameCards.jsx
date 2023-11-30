import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export const RoomGamesListItems = ({ bgcolor, game, image }) => {
  const chessRoomId = uuidv4();

  const navigate = useNavigate();

  const GotoRoom = () => {
    navigate(`/chessroom/${chessRoomId}`);
  };

  return (
    <div
      className={`group w-[45%] h-[46vh] rounded-lg ${bgcolor} border border-black relative drop-shadow-md overflow-hidden`}
    >
      <img
        className="h-full w-full object-contain rounded-lg"
        src={image}
        alt={game}
      ></img>
      (
        <div className="w-full h-full text-center absolute z-10 bg-[#1f3d4738] backdrop-blur-md rounded-lg -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <p className="text-3xl mb-4 text-[#021325]">{game}</p>
            <div className="flex justify-between ">
              <button
                onClick={GotoRoom}
                className="border border-black px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-black text-xl rounded-lg mb-1"
              >
                Create a room
              </button>
              <button className="border border-black px-4 py-3 bg-gradient-to-r from-[#c7f9cc] to-[#57cc99] text-black text-xl rounded-lg ml-4">
                Join a room
              </button>
            </div>
            <div className="w-8/12">
              <input
                className="w-full px-4 py-2 border border-blue-400 bg-[#021325] rounded-lg mt-2 outline-none text-gray-300"
                type="text"
                placeholder="Enter room ID"
              />
            </div>
          </div>
        </div>
      )
    </div>
  );
};

export const GamesListItems = ({ bgcolor, game, image }) => {

  return (
    <div
      className={`group w-[45%] h-[46vh] rounded-lg ${bgcolor} border border-black relative drop-shadow-md overflow-hidden`}
    >
      <img
        className="h-full w-full object-contain rounded-lg"
        src={image}
        alt={game}
      ></img>
        <div className="w-full h-full flex flex-col justify-center items-center absolute z-10 -bottom-10 group-hover:bottom-0 bg-[#1f3d4738] backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
          <p className="text-3xl mb-4 text-[#021325]">{game}</p>
          <button className="border border-black px-6 py-3 bg-gradient-to-r from-[#c7f9cc] to-[#57cc99] text-black text-xl rounded-lg">
            Play
          </button>
        </div>
    </div>
  );
};
