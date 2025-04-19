import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";
import { menu } from "./MyLink";

export default function NavLinks() {
  return (
    <>
      {menu.map((menuLink, id) => (
        <div className="relative group" key={id}>
          <div>
            {menuLink.btn ? (
              <button className=" flex items-center gap-x-1  px-5 py-1.5 rounded font-semibold text-[#00394f] group-hover:text-[#177cb8] cursor-pointer  transition duration-[200ms]">
                <span className=" transition duration-75">
                  {menuLink.title}
                </span>
                <RiArrowDownSLine className="group-hover:rotate-180  transition duration-75 " />
              </button>
            ) : (
              <Link
                href={"/"}
                className="px-5 py-1.5 rounded font-semibold text-[#00394f] hover:text-[#177cb8] transition duration-[200ms]"
              >
                <span className=" transition duration-75">
                  {menuLink.title}
                </span>
              </Link>
            )}
          </div>
          {menuLink.submenu && (
            <div className="pt-[1.4rem]  -left-7 w-[250%] absolute opacity-0 invisible scale-y-0 transform origin-top transition-all duration-[350ms] ease-in-out group-hover:opacity-100 group-hover:scale-y-100 group-hover:visible  z-50">
              <div className=" flex flex-col text-left pl-5 pt-5 pb-5 text-[14px] leading-7  shadow bg-white">
                {menuLink.submenus.map((submenulink, id) => (
                  <Link
                    key={id}
                    href={"/"}
                    className="py-1.5 px-3 transition-all duration-[350ms] ease-in-out cursor-pointer hover:text-[#177cb8]"
                  >
                    {submenulink.subtitle}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
