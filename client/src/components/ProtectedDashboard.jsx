import Axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function ProtectedDashboard(props) {

  const { Component } = props;

  const navigate = useNavigate();

  useEffect(()=>{
    checkUser();
  },[]);

  async function checkUser() {
    Axios.get("http://localhost:8000/").then((response) => {
      console.log(response);
      if (response.data.loggedIn == false) {
        navigate("/login");       
      }
    });
  }

  return <Component/>
}

export default ProtectedDashboard;
