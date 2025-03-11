"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { cn } from "@/libs/utils";
import { useTailwindBreakpoint } from "@/hooks/useTailwindBreakpoints";
import { FolderIcon } from "@/templates/components/icon/folderIcon";
import { FamilyIcon } from "@/templates/components/icon/familyIcon";
import { EducationIcon } from "@/templates/components/icon/educationIcon";
import { BudgetIcon } from "@/templates/components/icon/budgetIcon";
import { MedicalIcon } from "@/templates/components/icon/medicalIcon";
import HamburgerButton from "./HamburgerButton";

// Need to be configured based on the routes
const routes = [
  { route: "/", label: "Beranda" },
  { route: "/tentang", label: "Tentang Kami" },
  {
    route: "/pokja",
    label: "POKJA",
    dropdownMenu: [
      { route: "/pokja/sekretariat", label: "Sekretariat", icon: FolderIcon },
      { route: "/pokja/1", label: "Pokja 1", icon: FamilyIcon },
      { route: "/pokja/2", label: "Pokja 2", icon: EducationIcon },
      { route: "/pokja/3", label: "Pokja 3", icon: BudgetIcon },
      { route: "/pokja/4", label: "Pokja 4", icon: MedicalIcon },
    ],
  },
  { route: "/galeri", label: "Galeri" },
  { route: "/artikel", label: "Artikel" },
  // { route: "/layanan", label: "Layanan" },
];

// Contain all paths that doesn't need additional padding
const excludePages = ["/"];

export default function Navbar2() {
  const path = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState<{ [key: string]: boolean }>({});
  const [isOpenMobile, setIsOpenMobile] = useState(false); // For mobile dropdown
  const { isLg } = useTailwindBreakpoint();

  useEffect(() => {
    const defaultSubMenuOpen: { [key: string]: boolean } = {};
    routes.forEach((route) => {
      defaultSubMenuOpen[route.label] = false;
    });
    setSubMenuOpen(defaultSubMenuOpen);
  }, []);

  useEffect(() => {
    setIsOpenMobile(isLg);
  }, [isLg]);

  function toggleSubMenu(label: string) {
    return () => {
      setSubMenuOpen((prev) => ({
        ...prev,
        [label]: !prev[label],
      }));
    };
  }

  function toggleDropDownMobile() {
    setIsOpenMobile((prev) => !prev);
  }

  // Render the dropdown submenu
  function renderSubMenu(
    dropdownMenu: {
      route: string;
      label: string;
      icon: React.ComponentType<{ className?: string }>;
    }[],
    isOpen: boolean,
  ) {
    return (
      <div
        className={cn(
          "relative top-0 z-[99] flex w-full flex-col self-center overflow-clip bg-transparent transition-all duration-500 lg:absolute lg:-top-5 lg:z-[-1] lg:w-[200%] lg:rounded-xl",
          isOpen ? "h-auto opacity-100" : "h-0 opacity-0",
        )}
      >
        <div className="z-[99] flex w-full flex-col bg-white shadow-lg drop-shadow-xl lg:mt-[9dvh] lg:rounded-xl">
          {dropdownMenu.map((item) => {
            const isActive = path === item.route;
            return (
              <div
                key={JSON.stringify(item)}
                className={cn(
                  "flex justify-center gap-2 bg-inherit font-[600] transition-all duration-500 hover:text-blue-900 max-lg:py-2 lg:py-[4px] xl:py-[9px]",
                  isActive ? "text-blue-900" : "text-blue-500",
                )}
              >
                <item.icon
                  className={cn("h-6 w-6", isActive ? "text-blue-900" : "text-blue-500")}
                />
                <Link
                  href={item.route}
                  onClick={() => setIsOpenMobile(false)}
                  className={cn("z-[99]", isActive && "border-b-2 border-blue-900")}
                >
                  {item.label}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Padding */}
      {!excludePages.includes(path) && (
        <div className="top-0 h-[10dvh] w-full bg-white lg:h-[12dvh]" />
      )}
      {/* Navbar */}
      <nav className="border-blue text-blue fixed top-0 z-[99] flex h-[10dvh] w-full items-center justify-between bg-white px-[5%] py-3 text-sm text-black md:text-lg lg:h-[12dvh] lg:border-b-[1.7px] lg:px-20 lg:text-sm lg:drop-shadow-xl xl:text-base 2xl:text-xl">
        <Link
          href="/"
          className="flex items-center justify-center gap-3 duration-500 hover:scale-[1.1]"
        >
          <Image
            alt="Logo Papua Pegunungan"
            src="/templates/components/PKK.png"
            width={500}
            height={500}
            className="w-[47px] md:w-[48px] xl:w-[54px] 2xl:w-[66px]"
          />
          <p className="text-xs font-semibold lg:text-sm">
            TIM PENGGERAK PEMBERDAYAAN
            <br />
            & KESEJAHTERAAN KELUARGA (PKK)
            <br />
            PROVINSI PAPUA PEGUNUNGAN
          </p>
        </Link>
        <HamburgerButton
          isOpen={isOpenMobile}
          toggleOpen={toggleDropDownMobile}
          className="lg:hidden"
        />
        <div
          className={cn(
            isOpenMobile ? "absolute flex" : "hidden",
            "font-poppins max-lg:border-b-blue flex-col bg-white text-base max-lg:left-0 max-lg:top-[100%] max-lg:w-full max-lg:items-center max-lg:rounded-b-xl max-lg:border-b-[1.5px] max-lg:drop-shadow-xl md:text-lg",
            "lg:relative lg:flex lg:flex-row lg:gap-6 lg:text-[14px] xl:gap-8 xl:text-lg 2xl:text-xl",
          )}
        >
          {routes.map((item) => {
            const isDropdownActive =
              item.dropdownMenu &&
              item.dropdownMenu.some((subItem) => path.includes(subItem.route));
            const isActive = path === item.route || isDropdownActive;

            return (
              <button
                type="button"
                onClick={
                  item.dropdownMenu
                    ? !isLg
                      ? toggleSubMenu(item.label)
                      : undefined
                    : () => setIsOpenMobile(false)
                }
                onMouseEnter={isLg && item.dropdownMenu ? toggleSubMenu(item.label) : undefined}
                onMouseLeave={isLg && item.dropdownMenu ? toggleSubMenu(item.label) : undefined}
                key={JSON.stringify(item)}
                className="group relative flex flex-col items-center max-lg:w-full max-lg:py-2"
              >
                <div className="group flex items-center gap-[1px] duration-500 max-lg:w-fit">
                  <Link
                    href={item.route}
                    onClick={(e) => {
                      if (item.dropdownMenu) {
                        e.preventDefault();
                      } else {
                        setIsOpenMobile(false);
                      }
                    }}
                    className={cn(
                      "flex h-full w-full items-center justify-center font-[600] text-blue-500 duration-500 hover:text-blue-900",
                      isActive && "border-b-2 border-blue-900 text-blue-900",
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.dropdownMenu && (
                    <IoIosArrowDown
                      className={cn(
                        "h-5 w-5 duration-500",
                        subMenuOpen[item.label] && "rotate-[180deg]",
                      )}
                    />
                  )}
                </div>
                {/* Garis */}
                <span
                  className={cn(
                    "h-[1px] w-0 transition-all duration-500 group-hover:w-full max-lg:hidden",
                    isActive && "w-full",
                  )}
                />
                {/* Render Sub Menu if it has it */}
                {item.dropdownMenu && renderSubMenu(item.dropdownMenu, subMenuOpen[item.label])}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
