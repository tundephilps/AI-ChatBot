import { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export default () => {
  const [pages, setPages] = useState(["1", "2", "3", , "...", "8", "9", "10"]);
  const [currentPage, setCurrentPage] = useState("1");

  return (
    <div className=" mt-12  text-gray-600 ">
      <div className="hidden justify-between text-sm md:flex">
        <div>Showing data 1 to 8 of 256k entries</div>
        <div className="flex items-center gap-8" aria-label="Pagination">
          <a
            href="javascript:void(0)"
            className="hover:text-indigo-600 bg-[#eeeeee] p-2.5 rounded-lg"
          >
            <MdOutlineKeyboardArrowLeft />
          </a>
          <ul className="flex items-center gap-1">
            {pages.map((item, idx) => (
              <li key={item}>
                {item == "..." ? (
                  <div>{item}</div>
                ) : (
                  <a
                    href="javascript:void(0)"
                    aria-current={currentPage == item ? "page" : false}
                    className={`px-3 py-2 rounded-lg duration-150 hover:text-white hover:bg-indigo-600 ${
                      currentPage == item
                        ? "bg-indigo-600 text-white font-medium"
                        : "bg-[#eeeeee]"
                    }`}
                  >
                    {item}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <a
            href="javascript:void(0)"
            className="hover:text-indigo-600 bg-[#eeeeee] p-2.5 rounded-lg"
          >
            <MdOutlineKeyboardArrowRight />
          </a>
        </div>
      </div>
      {/* On mobile version */}
      <div className="flex items-center justify-between text-sm text-gray-600 font-medium md:hidden">
        <a
          href="javascript:void(0)"
          className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50"
        >
          Previous
        </a>
        <div className="font-medium">SHOWING 1-10 OF 120</div>
        <a
          href="javascript:void(0)"
          className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
    </div>
  );
};
