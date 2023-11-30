import logo from "../UI_Images/logo.png";

function Navbar() {
  const NavbarItems = ({ item }) => {
    return <p className="cursor-pointer hover:text-[#0054C6]">{item}</p>;
  };

  return (
    <>
      <div className="bg-white w-4/5 h-14 z-40 fixed top-3 translate-x-28 ml-4 rounded-2xl flex flex-row justify-between">
        <div className="h-full w-20 flex items-center justify-center">
          <img className="h-10" src={logo} alt="logo"></img>
        </div>
        <div className="w-2/4 h-full flex flex-row justify-evenly items-center">
          {["Home", "Features", "About us", "Contact"].map(
            (item, index) => (
              <NavbarItems key={item + index} item={item} />
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
