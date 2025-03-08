import Link from "next/link";
import { RiArrowDownSLine, RiFacebookLine } from "react-icons/ri";

export default function Nav() {
  return (
    <div className="mt-7 container mx-auto flex justify-between text-[15px] items-center ">
      <div className="text-5xl flex gap-1">
        <img src="/logo.png" width={50} alt="" />
        <span>Gauss</span>
      </div>
      <nav className="flex items-center">
        <Link
          href={"/"}
          className=" px-5 py-1.5 rounded  hover:bg-blue-500 hover:text-white transition duration-[200ms]"
        >
            <span className=" transition duration-75">Inicio</span>
          
        </Link>
        <Link
          href={"/"}
          className=" px-5 py-1.5 rounded  hover:bg-blue-500 hover:text-white transition duration-[200ms]"
        >
                      <span className=" transition duration-75">Nosotros</span>

        </Link>

        <div className="relative group">
          <button className=" flex items-center gap-x-1  px-5 py-1.5 rounded group-hover:bg-blue-500 group-hover:text-white cursor-pointer  transition duration-[200ms]">
            <span className=" transition duration-75">Niveles</span>
            <RiArrowDownSLine className="group-hover:rotate-180  transition duration-75 "/>
          </button>

          <div className="pt-[1.4rem]  -left-7 w-[250%]  absolute  opacity-0 invisible scale-y-0 transform origin-top transition-all duration-[350ms] ease-in-out group-hover:opacity-100 group-hover:scale-y-100 group-hover:visible  z-50">
            <div className=" flex flex-col text-left pl-5 pt-5 pb-5 text-[13px] leading-7  shadow bg-white">
              <Link href={"/"} className="py-1.5 px-3 transition-all duration-[350ms] ease-in-out cursor-pointer hover:text-orange-400">Primaria</Link>
              <Link href={"/"} className="py-1.5 px-3 transition-all duration-[350ms] ease-in-out cursor-pointer hover:text-orange-400">Secundaria</Link>
              
            </div>
          </div>
        </div>

        <Link
          href={"/"}
          className=" px-5 py-1.5 rounded  hover:hover:bg-blue-500 hover:text-white transition duration-[200ms]"
        >
                      <span className=" transition duration-75">Éxitos</span>

        </Link>
       
       







        <div className="relative group">
          <button className=" flex items-center gap-x-1  px-5 py-1.5 rounded group-hover:bg-blue-500 group-hover:text-white cursor-pointer  transition duration-[200ms]">
            <span className=" transition duration-75">Información</span>
            <RiArrowDownSLine className="group-hover:rotate-180  transition duration-75 "/>
          </button>

          <div className=" pt-[1.4rem]  -left-7 w-[250%]  absolute  opacity-0 invisible scale-y-0 transform origin-top transition-all duration-[350ms] ease-in-out group-hover:opacity-100 group-hover:scale-y-100 group-hover:visible  z-50">
            <div className=" flex flex-col text-left pl-5 pt-5 pb-5 text-[13px] leading-7  shadow bg-white">
            
              <Link href={"/"} className="py-1.5 px-3 transition-all duration-[350ms] ease-in-out cursor-pointer hover:text-orange-400 ">Reglamento Interno</Link>
              <Link href={"/"} className="py-1.5 px-3 transition-all duration-[350ms] ease-in-out cursor-pointer hover:text-orange-400 ">Resolución de Autorización</Link>
              <Link href={"/"} className="py-1.5 px-3 transition-all duration-[350ms] ease-in-out cursor-pointer hover:text-orange-400 ">Proyecto Anual de Trabajo (PAT)</Link>
              <Link href={"/"} className="py-1.5 px-3 transition-all duration-[350ms] ease-in-out cursor-pointer hover:text-orange-400 ">Plan de Convivencia</Link>
              <Link href={"/"} className="py-1.5 px-3 transition-all duration-[350ms] ease-in-out cursor-pointer hover:text-orange-400 ">Proyecto Educativo Institucional (PEI)</Link>
            </div>
          </div>
        </div>


        
            
 






        <Link
          href={"/"}
          className=" px-5 py-1.5 rounded  hover:hover:bg-blue-500 hover:text-white transition duration-[200ms]"
        >
                      <span className=" transition duration-75">Contacto</span>

        </Link>
      </nav>
      <div className="flex">
        <Link href={"/"} className="px-2">
          <RiFacebookLine />
        </Link>
        <Link href={"/"} className="px-2">
          <RiFacebookLine />
        </Link>
        <Link href={"/"} className="px-2">
          <RiFacebookLine />
        </Link>
      </div>
      
    </div>
  );
}
