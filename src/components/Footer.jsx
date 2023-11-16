import logo from "../../public/logo/logo.png";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

function Footer() {
    const currentYear = new Date().getFullYear();
    
  return (
    <footer className="flex flex-col justify-between px-3 pt-8 z-50 laptop:px-48 tablet:px-20 bg-slate-50">
      <section className="flex justify-between w-full pb-8 border-b border-slate-950">
        <img className="h-20" src={logo} alt="farsab logo" />
        <div className="flex flex-col">
          <p className="text-lg font-semibold">Follow Us</p>
          <div className="flex gap-2">
            <a href="https://facebook.com" target="_blank"><FaSquareFacebook size="2rem"  /></a>
            <a href="https://instagram.com" target="_blank"><FaSquareInstagram size="2rem" /></a>
          </div>
        </div>
      </section>
      <p className="text-center text-xs py-3 text-gray-600">Copyright &copy; {currentYear} | Built by Abel Morad</p>
    </footer>
  );
}

export default Footer;
