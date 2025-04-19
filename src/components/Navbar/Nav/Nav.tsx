import { nunito } from "@/config/fonts";
import Link from "next/link";
import {
  RiArrowDownSLine,
  RiFacebookLine,
  RiTwitterLine,
  RiYoutubeLine,
} from "react-icons/ri";
import NavLinks from "./NavLinks";

export default function Nav() {
  return (
    <div
      className={`mt-7 mb-2 container mx-auto flex justify-between  items-center ${nunito.className} `}
    >
      <Link
        href={"/"}
        className="flex text-5xl gap-1 cursor-pointer items-center"
      >
        <img src="/logo.png" width={"30px"} alt="Logo de la empresa" />
        <span className={`text-[#177cb8] font-semibold ${nunito.className}`}>
          Gauss
        </span>
      </Link>
      <nav className="flex items-center">
        <NavLinks />
      </nav>
      <div className="flex gap-2 text-xl items-center">
        <Link href={""}>
          <RiTwitterLine className="w-8 h-8 p-1.5 text-[#177cb8] border border-[#177cb8] rounded-full flex text-center justify-center items-center transition-all duration-300 ease-in-out hover:bg-[#177cb8] hover:text-white hover:scale-110" />
        </Link>
        <Link href={""}>
          <RiYoutubeLine className="w-8 h-8 p-1.5 text-[#177cb8] border border-[#177cb8] rounded-full flex text-center justify-center items-center transition-all duration-300 ease-in-out hover:bg-[#177cb8] hover:text-white hover:scale-110" />
        </Link>
        <Link
          href={"https://www.facebook.com/PreuniversitariaGauss"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiFacebookLine className="w-8 h-8 p-1.5 text-[#177cb8] border border-[#177cb8] rounded-full flex text-center justify-center items-center transition-all duration-300 ease-in-out hover:bg-[#177cb8] hover:text-white hover:scale-110" />
        </Link>
      </div>
    </div>
  );
}
