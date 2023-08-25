import logo from "../assets/logo.svg";
import iconHamburger from "../assets/icon-hamburger.svg";
import iconClose from "../assets/icon-close-menu.svg";

const Navbar = ({ handleClick, mobileMenuVisible }) => {
  return (
    <nav className="container mx-auto px-4 pt-[55px] flex flex-row justify-between align-middle items-center">
      <a href="/">
        <img src={logo} alt="Crowdfunding Logo" />
      </a>

      <ul className="hidden flex-row gap-[45px] text-[#fff] font-commissioner font-bold text-base md:flex">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Discover</a>
        </li>
        <li>
          <a href="#">Get Started</a>
        </li>
      </ul>

      <img
        src={mobileMenuVisible ? iconClose : iconHamburger}
        alt=""
        className="cursor-pointer block md:hidden"
        onClick={handleClick}
      />
    </nav>
  );
};

export default Navbar;
