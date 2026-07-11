import Link from "next/link";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  navlink: {
    id: number;
    url: string;
    label: string;
    submenu?: {
      label: string;
      url: string;
    }[];
  }[];

  showNav: boolean;
  closeNav: () => void;
};

export const MobileNav = ({ navlink, showNav, closeNav }: Props) => {
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const toggleMenu = (id: number) => {
    setOpenMenu((prev) => (prev === id ? null : id));
  };

  return (
    <div className="lg:hidden">
      {/* Overlay */}
      <div
        onClick={closeNav}
        className={`fixed inset-0 bg-black/50 z-40 transition-all duration-300 ${showNav ? "opacity-100 visible" : "opacity-0 invisible"}`}
      ></div>

      {/* Sidebar */}
      <div
        className={`${showNav ? "translate-x-0" : "-translate-x-full"} bg-[#083F39] fixed top-0 left-0 w-[80%] sm:w-[60%] z-50 h-screen transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]`}
      >
        {/* close */}
        <div className="flex justify-end p-5">
          <CgClose
            onClick={closeNav}
            className="w-8 h-8 cursor-pointer"
          ></CgClose>{" "}
        </div>

        {/* ---Nav Links----- */}
        <div className="flex flex-col">
          {navlink.map((item) => (
            <div key={item.id}>
              {/* Main Menu */}
              <button
                onClick={() => item.submenu && toggleMenu(item.id)}
                className="w-full flex items-center justify-between px-8 py-3 border-b border-white/10 hover:bg-[#0B794F]"
              >
                <Link
                  href={item.url}
                  onClick={!item.submenu ? closeNav : undefined}
                >
                  {item.label}
                </Link>

                {item.submenu && (
                  <span>{openMenu === item.id ? "▲" : "▼"}</span>
                )}
              </button>

              {/* Dropdown */}
              {item.submenu && openMenu === item.id && (
                <div className="bg-[#0d544c]">
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.url}
                      href={sub.url}
                      onClick={closeNav}
                      className="block px-12 py-3 text-sm border-b border-white/10 hover:bg-[#147A6E]"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="px-8 mt-10 space-y-4">
          <button className="w-full border border-white rounded-md py-3">
            Login
          </button>

          <button className="w-full bg-[#0B794F] hover:bg-[#149865] transition-all duration-300 rounded-md py-3">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};
