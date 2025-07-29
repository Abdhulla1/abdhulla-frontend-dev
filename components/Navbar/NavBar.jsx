"use client";
import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

const menu = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#resume", label: "Resume" },
];

export default function NavBar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 128; // adjust for nav height
        if (window.scrollY >= sectionTop) {
          current = `#${section.getAttribute("id")}`;
        }
      });

      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  if (!mounted) return null;
  return (
    <nav className="flex fixed items-center justify-between lg:justify-around w-full h-10 px-10  backdrop-blur lg:px-28 py-16 ">
      <Link href="#" className=" p-3 text font-oleo text-3xl ">
        {" "}
        Abdhulla{" "}
      </Link>

      <div className="block relative lg:hidden">
        <button
          className=" absolute right-16  lg:block lg:p-3  "
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 23.7222C19.9887 23.7222 23.2222 20.4887 23.2222 16.5C23.2222 12.5113 19.9887 9.27778 16 9.27778C12.0113 9.27778 8.77778 12.5113 8.77778 16.5C8.77778 20.4887 12.0113 23.7222 16 23.7222Z"
                stroke="#E1E1E1"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.33333 28.1667L5.44444 27.0556M26.5556 27.0556L27.6667 28.1667M26.5556 5.94444L27.6667 4.83333M5.44444 5.94444L4.33333 4.83333M3.22222 16.5H1M31 16.5H28.7778M16 29.2778V31.5M16 1.5V3.72222"
                stroke="#E1E1E1"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.1975 19.6562C26.4525 19.0487 25.7238 18.5312 25.1125 18.8012C23.8907 19.3376 22.5706 19.6134 21.2362 19.6112C16.005 19.6112 11.765 15.4562 11.765 10.33C11.7631 8.59918 12.2548 6.90371 13.1825 5.4425C13.5375 4.8825 13.1112 4.1075 12.4613 4.2725C7.45 5.55125 3.75 10.0162 3.75 15.3275C3.75 21.6362 8.96875 26.75 15.4075 26.75C20.2825 26.75 24.4575 23.8187 26.1975 19.6562Z"
                fill="#484E53"
              />
              <path
                d="M19.5136 4.37875C18.8511 3.93625 18.0611 4.72625 18.5024 5.38875L19.2899 6.57C19.6093 7.04896 19.7798 7.61178 19.7798 8.1875C19.7798 8.76322 19.6093 9.32605 19.2899 9.805L18.5024 10.9863C18.0611 11.6488 18.8524 12.4388 19.5149 11.9963L20.6949 11.2088C21.1738 10.8893 21.7367 10.7188 22.3124 10.7188C22.8881 10.7188 23.4509 10.8893 23.9299 11.2088L25.1111 11.9963C25.7736 12.4388 26.5636 11.6488 26.1211 10.9863L25.3336 9.805C25.0142 9.32605 24.8437 8.76322 24.8437 8.1875C24.8437 7.61178 25.0142 7.04896 25.3336 6.57L26.1211 5.38875C26.5636 4.72625 25.7736 3.93625 25.1099 4.37875L23.9299 5.16625C23.4509 5.48571 22.8881 5.65619 22.3124 5.65619C21.7367 5.65619 21.1738 5.48571 20.6949 5.16625L19.5136 4.37875Z"
                fill="#484E53"
              />
            </svg>
          )}
        </button>
        <button className="block lg:hidden" onClick={() => setIsOpen(!open)}>
          {theme === "dark" ? (
            <svg
              width="24"
              height="20"
              viewBox="0 0 14 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 0H6C6.26522 0 6.51957 0.105357 6.70711 0.292893C6.89464 0.48043 7 0.734784 7 1C7 1.26522 6.89464 1.51957 6.70711 1.70711C6.51957 1.89464 6.26522 2 6 2H1C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM8 8H13C13.2652 8 13.5196 8.10536 13.7071 8.29289C13.8946 8.48043 14 8.73478 14 9C14 9.26522 13.8946 9.51957 13.7071 9.70711C13.5196 9.89464 13.2652 10 13 10H8C7.73478 10 7.48043 9.89464 7.29289 9.70711C7.10536 9.51957 7 9.26522 7 9C7 8.73478 7.10536 8.48043 7.29289 8.29289C7.48043 8.10536 7.73478 8 8 8ZM1 4H13C13.2652 4 13.5196 4.10536 13.7071 4.29289C13.8946 4.48043 14 4.73478 14 5C14 5.26522 13.8946 5.51957 13.7071 5.70711C13.5196 5.89464 13.2652 6 13 6H1C0.734784 6 0.48043 5.89464 0.292893 5.70711C0.105357 5.51957 0 5.26522 0 5C0 4.73478 0.105357 4.48043 0.292893 4.29289C0.48043 4.10536 0.734784 4 1 4Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="20"
              viewBox="0 0 14 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 0H6C6.26522 0 6.51957 0.105357 6.70711 0.292893C6.89464 0.48043 7 0.734784 7 1C7 1.26522 6.89464 1.51957 6.70711 1.70711C6.51957 1.89464 6.26522 2 6 2H1C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM8 8H13C13.2652 8 13.5196 8.10536 13.7071 8.29289C13.8946 8.48043 14 8.73478 14 9C14 9.26522 13.8946 9.51957 13.7071 9.70711C13.5196 9.89464 13.2652 10 13 10H8C7.73478 10 7.48043 9.89464 7.29289 9.70711C7.10536 9.51957 7 9.26522 7 9C7 8.73478 7.10536 8.48043 7.29289 8.29289C7.48043 8.10536 7.73478 8 8 8ZM1 4H13C13.2652 4 13.5196 4.10536 13.7071 4.29289C13.8946 4.48043 14 4.73478 14 5C14 5.26522 13.8946 5.51957 13.7071 5.70711C13.5196 5.89464 13.2652 6 13 6H1C0.734784 6 0.48043 5.89464 0.292893 5.70711C0.105357 5.51957 0 5.26522 0 5C0 4.73478 0.105357 4.48043 0.292893 4.29289C0.48043 4.10536 0.734784 4 1 4Z"
                fill="#484E53"
              />
            </svg>
          )}
        </button>

        <ul
          className={`absolute top-full shadow-lg px-10 py-5 right-2 mt-5 flex flex-col backdrop-blur-xs bg-white/5 border border-white/20 rounded-xl  shadow-lg gap-2 transition-all ease-in-out  ${
            open
              ? "opacity-100 scale-100 "
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          {menu.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setActiveLink(href)}
                className={`${
                  activeLink === href ? "text-[#4FC3F7] font-bold " : ""
                } transition-all duration-300`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className=" hidden lg:block lg:flex  lg:justify-center">
        <ul className=" flex justify-between space-x-12 ">
          {menu.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setActiveLink(href)}
                className={`${
                  activeLink === href ? "text-[#4FC3F7] font-bold " : ""
                } transition-all duration-300`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href="#"
        className="hidden lg:block lg:py-2 lg:px-5 lg:text lg:border-2 lg:rounded-xl  dark:border-[#4FC3F7]"
      >
        {" "}
        Contact
      </Link>
      <button
        className="hidden lg:block lg:p-3  "
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <svg
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 23.7222C19.9887 23.7222 23.2222 20.4887 23.2222 16.5C23.2222 12.5113 19.9887 9.27778 16 9.27778C12.0113 9.27778 8.77778 12.5113 8.77778 16.5C8.77778 20.4887 12.0113 23.7222 16 23.7222Z"
              stroke="#E1E1E1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.33333 28.1667L5.44444 27.0556M26.5556 27.0556L27.6667 28.1667M26.5556 5.94444L27.6667 4.83333M5.44444 5.94444L4.33333 4.83333M3.22222 16.5H1M31 16.5H28.7778M16 29.2778V31.5M16 1.5V3.72222"
              stroke="#E1E1E1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.1975 19.6562C26.4525 19.0487 25.7238 18.5312 25.1125 18.8012C23.8907 19.3376 22.5706 19.6134 21.2362 19.6112C16.005 19.6112 11.765 15.4562 11.765 10.33C11.7631 8.59918 12.2548 6.90371 13.1825 5.4425C13.5375 4.8825 13.1112 4.1075 12.4613 4.2725C7.45 5.55125 3.75 10.0162 3.75 15.3275C3.75 21.6362 8.96875 26.75 15.4075 26.75C20.2825 26.75 24.4575 23.8187 26.1975 19.6562Z"
              fill="#484E53"
            />
            <path
              d="M19.5136 4.37875C18.8511 3.93625 18.0611 4.72625 18.5024 5.38875L19.2899 6.57C19.6093 7.04896 19.7798 7.61178 19.7798 8.1875C19.7798 8.76322 19.6093 9.32605 19.2899 9.805L18.5024 10.9863C18.0611 11.6488 18.8524 12.4388 19.5149 11.9963L20.6949 11.2088C21.1738 10.8893 21.7367 10.7188 22.3124 10.7188C22.8881 10.7188 23.4509 10.8893 23.9299 11.2088L25.1111 11.9963C25.7736 12.4388 26.5636 11.6488 26.1211 10.9863L25.3336 9.805C25.0142 9.32605 24.8437 8.76322 24.8437 8.1875C24.8437 7.61178 25.0142 7.04896 25.3336 6.57L26.1211 5.38875C26.5636 4.72625 25.7736 3.93625 25.1099 4.37875L23.9299 5.16625C23.4509 5.48571 22.8881 5.65619 22.3124 5.65619C21.7367 5.65619 21.1738 5.48571 20.6949 5.16625L19.5136 4.37875Z"
              fill="#484E53"
            />
          </svg>
        )}
      </button>
    </nav>
  );
}
