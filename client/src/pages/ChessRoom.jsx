import { useState, useMemo } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

function ChessRoom() {
  const chess = useMemo(() => new Chess(), []);
  const [fen, setFen] = useState(chess.fen());
  const [over, setOver] = useState("");

  function makeAMove(move) {
    try {
      const result = chess.move(move);
      setFen(chess.fen());
      if (chess.isGameOver()) {
        if (chess.isCheckmate()) {
          setOver(
            `Checkmate! ${chess.turn() === "w" ? "black" : "white"} wins!`
          );
        } else if (chess.isStalemate()) {
          setOver("Stalemate!");
        } else if (chess.isDraw()) {
          setOver("Draw");
        } else {
          setOver("Game over");
        }
      }

      return result;
    } catch (e) {}
  }

  function onDrop(sourceSquare, targetSquare) {
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      turn: chess.turn(),
      promotion: "q",
    });

    if (move === null) return false;
    return true;
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#021325]">
      <div className="w-5/6 h-full  flex justify-evenly items-center">
        <div className="h-full w-1/6"></div>
        <div className="">
          <Chessboard
            position={fen}
            boardWidth={560}
            showBoardNotation={false}
            onPieceDrop={onDrop}
          />
        </div>
        <div className="h-full w-1/6"></div>
      </div>
    </div>
  );
}

export default ChessRoom;
