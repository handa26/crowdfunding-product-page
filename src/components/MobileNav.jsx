import { navLinks } from "../constants";

const MobileNav = ({ mobileMenuVisible }) => {
  return (
    <nav
      className={`${
        mobileMenuVisible ? "flex" : "hidden"
      } absolute mx-auto bg-[#ffffffe1] w-[325px] h-auto shadow-lg rounded-lg left-0 top-28 right-0 z-20`}
    >
      <ul className="flex flex-col align-middle justify-evenly">
        {navLinks.map(({ label, href }) => (
          <li key={label}>
            <a href={href} className="text-[24px] p-[10px] block">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
