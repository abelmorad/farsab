import NavDesk from "./NavDesk";
import NavMob from "./NavMob";
import logo from "../../public/logo/logo.png";

function Header() {
  return (
    <header className="flex justify-between items-center px-3 laptop:px-48 tablet:px-20 py-3 fixed w-screen backdrop-blur-sm">
      <a href="#">
        <img className="h-14 tablet:h-20" src={logo} alt="farsab logo" />
      </a>
      <NavMob />
      <NavDesk />
    </header>
  );
}

export default Header;
