//import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react"
import logo from "../assets/images/Logo.png";

import Logo2 from "../assets/images/Logo2.png";

import Pro from "../assets/images/Pro.png";
import profile from "../assets/images/profile.png";
import { createContext, useContext, useState } from "react";
import { FiChevronDown, FiChevronsRight } from "react-icons/fi";
import { MdCropOriginal, MdKeyboardArrowDown } from "react-icons/md";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);
  return (
    <>
      <aside className="h-full hidden lg:block">
        <nav className="h-full flex flex-col bg-white border-r shadow-sm py-[18px]">
          <div className="p-4 pb-2 flex justify-between items-center lg:pb-8">
            <img
              src={logo}
              className={`overflow-hidden transition-all ${
                expanded ? "w-[195px] h-[39px]" : "hidden"
              }`}
              onClick={() => setExpanded((curr) => !curr)}
            />
            <p className={`text-xs ${expanded ? "block" : "hidden"} `}>v.01</p>
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className=" rounded-lg bg-gray-50 hover:bg-gray-100"
            >
              {expanded ? (
                <img src={Logo2} className="h-[32px] w-[32px] hidden " />
              ) : (
                <img src={Logo2} className="h-[32px] w-full ml-[2px] " />
              )}
            </button>
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">{children}</ul>
          </SidebarContext.Provider>

          <div
            className={`flex mx-auto pb-8 ${expanded ? "block" : "hidden"} `}
          >
            {/* <img src={Pro} /> */}
            <div className="w-64 h-32 bg-gradient-to-br from-[#eaabf0] to-[#4623e9] rounded-xl shadow-lg flex flex-col justify-center items-center text-white p-4">
              <p className="text-sm font-semibold mb-2 text-center">
                Upgrade to PRO to get
                <br /> access all Features!
              </p>
              <button className="bg-white hover:bg-purple-300 text-purple-600 font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition duration-300">
                Get Pro Now!
              </button>
            </div>
          </div>
          <div className=" flex p-3">
            <img src={profile} className="w-10 h-10 rounded-md" />
            <div
              className={`flex justify-between items-center overflow-hidden transition-all ${
                expanded ? "w-52 ml-3" : "w-0"
              } `}
            >
              <div className="leading-4">
                <h4 className="font-semibold">Evano</h4>
                <span className="text-xs text-gray-600">Project Manager</span>
              </div>
              <MdKeyboardArrowDown size={20} />
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext);
  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active
          ? "bg-[#5932ea] from-indigo-200 to-indigo-100 text-white"
          : "hover:bg-[#5932ea] text-[#9197b3]"
      }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        ></div>
      )}

      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}
