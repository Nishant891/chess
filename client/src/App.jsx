import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Error from "./pages/Error.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ChessRoom from "./pages/ChessRoom.jsx";
import ProtectedDashboard from "./components/ProtectedDashboard.jsx";

function App() {

  return (
    <>
        <Router basename="/">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/dashboard"
              element={<ProtectedDashboard Component={Dashboard} />}
            >
            </Route>
            <Route path="/chessroom/:roomId" element={<ChessRoom/>}/>
            <Route path="*" element={<Error />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
