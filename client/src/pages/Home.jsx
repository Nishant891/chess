import Navbar from "../components/Navbar.jsx";
import Main from "../components/Main.jsx";
import Features from "../components/Features.jsx";
import AboutUs from "../components/AboutUs.jsx";
import Axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("http://localhost:8000/").then((response) => {
      console.log(response.data.loggedIn);
      if(response.data.loggedIn === true){
        navigate('/dashboard');
      }
    })
  }, []);

  return (
    <>
      <Navbar />
      <Main />
      <Features />
      <AboutUs />
    </>
  );
}

export default Home;
