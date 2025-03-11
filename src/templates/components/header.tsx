"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { ChevronIcon } from "@/templates/components/icon/chevronIcon";
import { FolderIcon } from "@/templates/components/icon/folderIcon";
import { FamilyIcon } from "@/templates/components/icon/familyIcon";
import { EducationIcon } from "@/templates/components/icon/educationIcon";
import { BudgetIcon } from "@/templates/components/icon/budgetIcon";
import { MedicalIcon } from "@/templates/components/icon/medicalIcon";

const routes = [
  { route: "/", label: "Beranda" },
  { route: "/tentang", label: "Tentang Kami" },
  {
    label: "POKJA",
    dropdownMenu: [
      { route: "/pokja/sekretariat", label: "SEKTRETARIAT", icon: FolderIcon },
      { route: "/pokja/1", label: "POKJA 1", icon: FamilyIcon },
      { route: "/pokja/2", label: "POKJA 2", icon: EducationIcon },
      { route: "/pokja/3", label: "POKJA 3", icon: BudgetIcon },
      { route: "/pokja/4", label: "POKJA 4", icon: MedicalIcon },
    ],
  },
  { route: "/galeri", label: "Galeri" },
  { route: "/artikel", label: "Artikel" },
  { route: "/layanan", label: "Layanan" },
];

export function Navbar() {
  const pathname = usePathname();
  const [wasOpen, setWasOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [innerDropdownOpen, setInnerDropdownOpen] = useState(false);

  function toggleDropdown() {
    setDropdownOpen(!dropdownOpen);
  }

  function handleClickOutside(event: MouseEvent) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Element)) {
      setDropdownOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  });

  useEffect(() => {
    setTimeout(() => setWasOpen(dropdownOpen), 150);
  }, [dropdownOpen]);

  return (
    <nav className="z-30 flex items-center justify-between bg-neutral-50 px-2 py-4 shadow-xl lg:px-8">
      <Link href="/" className="z-50 flex items-center gap-x-2">
        <Image
          src="/templates/components/PKK.png"
          className="mb-1 h-[10vw] w-[10vw] md:h-[8vw] md:w-[8vw] lg:h-[5vw] lg:w-[5vw]"
          alt="Logo PKK"
          sizes="100%"
          width={0}
          height={0}
        />
        <p className="text-xs font-semibold lg:text-sm">
          TIM PENGGERAK PEMBERDAYAAN
          <br />
          & KESEJAHTERAAN KELUARGA (PKK)
          <br />
          PROVINSI PAPUA PEGUNUNGAN
        </p>
      </Link>
      <div className="relative hidden gap-x-10 text-lg text-blue-500 lg:flex">
        {routes.map((r) => (
          <div key={r.label} className={`group relative`}>
            {r.route ? (
              <Link
                href={r.route}
                className={`${pathname === r.route ? "text-blue-900 underline" : "active:underline"} group-hover:text-blue-900`}
              >
                {r.label}
              </Link>
            ) : (
              <div
                onClick={toggleDropdown}
                className={`flex cursor-pointer items-center gap-x-2 ${pathname.includes(r.label.toLowerCase()) ? "text-blue-900 underline" : ""}`}
              >
                <p className="group-hover:text-blue-900">{r.label}</p>
                <ChevronIcon
                  className={`h-4 w-4 cursor-pointer group-hover:*:fill-blue-900 ${pathname.includes(r.label.toLowerCase()) ? "*:fill-blue-900" : ""} ${dropdownOpen ? "rotate-180" : ""} duration-300`}
                />
              </div>
            )}
            {r.dropdownMenu && (
              <div ref={dropdownRef} className={`absolute -top-[1vw] mt-4 flex flex-col items-end`}>
                <div
                  className={`-left-[460%] top-[4vw] flex min-w-fit ${dropdownOpen ? "animate-fade-down" : wasOpen ? "animate-fade-up" : "hidden"} absolute w-32 flex-col gap-y-2 bg-neutral-50 px-4 pb-2 pt-5`}
                >
                  {r.dropdownMenu.map((d) => (
                    <Link key={d.label} href={d.route} className="flex gap-x-4 text-black">
                      <d.icon className="h-6 w-6" />
                      <span
                        className={`${pathname === d.route ? "text-blue-900 underline" : "hover:text-blue-900 active:underline"}`}
                      >
                        {d.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="z-50 lg:hidden">
        <button
          className="z-50 flex h-8 w-8 flex-col items-center justify-center *:block *:h-1 *:bg-blue-500"
          onClick={toggleDropdown}
        >
          <span
            className={`duration-300 ${dropdownOpen ? "w-6 origin-top-left -translate-y-1 translate-x-1 rotate-45" : "w-5"}`}
          />
          <span className={`duration-300 ${dropdownOpen ? "w-0" : "my-0.5 w-5"}`}></span>
          <span
            className={`duration-300 ${dropdownOpen ? "w-6 origin-bottom-left translate-x-1 translate-y-1 -rotate-45" : "w-5"}`}
          />
        </button>
        {wasOpen && (
          <div
            className={`${dropdownOpen ? "animate-fade-left" : "translate-x-full transform duration-200"} absolute left-0 right-0 top-0 mt-20 flex h-screen flex-col overflow-y-hidden bg-neutral-100 px-4 py-2`}
          >
            {routes.map((r, i) => (
              <div key={i} className={`my-4 text-center text-xl font-semibold`}>
                <div className={r.dropdownMenu ? "group flex justify-center gap-x-4" : ""}>
                  {!r.dropdownMenu ? (
                    <Link
                      key={i}
                      href={r.route}
                      className={
                        r.route === pathname
                          ? "text-blue-900 underline"
                          : "text-blue-500 active:text-blue-900 active:underline"
                      }
                    >
                      {r.label}
                    </Link>
                  ) : (
                    <div
                      onClick={() => setInnerDropdownOpen(!innerDropdownOpen)}
                      className="flex cursor-pointer items-center gap-x-2"
                    >
                      <p
                        className={`${r.route === pathname ? "text-blue-900 underline" : "text-blue-500 active:text-blue-900 active:underline"} group-hover:text-blue-900`}
                      >
                        {r.label}
                      </p>
                      <ChevronIcon
                        className={`mb-1 h-6 w-6 duration-300 group-hover:*:fill-blue-900 ${innerDropdownOpen ? "rotate-180" : ""}`}
                      />
                    </div>
                  )}
                </div>
                {r.dropdownMenu && innerDropdownOpen && (
                  <div className={`mt-3 flex flex-col gap-y-6 pl-4`}>
                    {r.dropdownMenu.map((d) => (
                      <Link href={d.route} key={d.label} className="flex justify-center gap-x-4">
                        <div>
                          <d.icon className="h-6 w-6" />
                        </div>
                        <span className="text-blue-500 active:text-blue-900 active:underline">
                          {d.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
