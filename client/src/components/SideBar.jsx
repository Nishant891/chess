import profile from "../UI_Images/profile.svg";
import faq from "../UI_Images/faq.svg";
import marketplace from "../UI_Images/marketplace.svg";
import Axios from 'axios';
import {useNavigate} from "react-router-dom";

function SideBar() {
  async function handleLogOut() {
    await Axios.post("http://localhost:8000/remove").then((response) => {
      navigate("/");
    });
  }

  const SidebarItems = ({ item, image }) => {
    return (
      <div className="flex w-full items-center justify-start ml-2">
        <img className="w-8 h-8" src={image} alt="profile-icon"></img>
        <p className="indent-4 cursor-pointer hover:text-[#0054C6]">{item}</p>
      </div>
    );
  };

  const navigate = useNavigate();

  return (
    <div className="w-1/6 bg-white flex flex-col justify-center items-center fixed left-0 top-0 bottom-0">
      <div className="h-full w-full text-white bg-[#021325] flex flex-col justify-between  border-r-4 border-[#0054C6]">
      <div className="w-full h-2/6 flex flex-col justify-evenly items-center">
        {[
          ["Profile", profile],
          ["Marketplace", marketplace],
          ["FAQs", faq],
        ].map((item, index) => (
          <SidebarItems key={item[0] + index} item={item[0]} image={item[1]} />
        ))}
      </div>
      <div className="w-full h-1/6 flex flex-col justify-center items-center">
        <button
          onClick={handleLogOut}
          className="m-1 bg-red-600 text-sm w-11/12 h-2/6 rounded-md hover:opacity-90"
        >
          <p>LOG OUT</p>
        </button>
        <button
          className="m-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-sm w-11/12 h-2/6 rounded-md hover:opacity-90"
        >
          <p>SHARE</p>
        </button>
      </div>

      </div>
    </div>
  );
}

export default SideBar;
