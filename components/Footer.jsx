import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-between items-center flex-wrap gap-4 px-15 py-4 mb-3 ">
        <h1 className="text-5xl font-bold w-70 ">Let's Work Together</h1>
        <Link href={'mailto:abbuabdhulla@gmail.com'} className="flex justify-between gap-3 items-center border-2 px-8 py-4 rounded-full ">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.40334 19.9134H7.38628V12.6691L3.12497 9.47314V18.6351C3.12497 19.3424 3.69816 19.9134 4.40334 19.9134Z"
              fill="#4285F4"
            />
            <path
              d="M17.6136 19.9135H20.5966C21.3039 19.9135 21.875 19.3403 21.875 18.6351V9.47314L17.6136 12.6692"
              fill="#34A853"
            />
            <path
              d="M17.6136 7.12927V12.6691L21.875 9.47311V7.76836C21.875 6.18746 20.0703 5.28615 18.8068 6.23433"
              fill="#FBBC04"
            />
            <path
              d="M7.38638 12.6688V7.12909L12.5 10.9641L17.6136 7.12891V12.6687L12.5 16.504"
              fill="#EA4335"
            />
            <path
              d="M3.12497 7.76836V9.47293L7.38628 12.669V7.12927L6.19313 6.23433C4.9275 5.28615 3.12497 6.18746 3.12497 7.76836Z"
              fill="#C5221F"
            />
          </svg>
        abbuabdhulla@gmail.com

        </Link>
      </div>

      <div className=" flex justify-between items-center py-4 px-15 border-t-2 border-black/10 dark:border-white/10">
            <h6 className="text-xs">@ 2025 all rights reserved </h6>
            <div className="flex flex-wrap gap-3 ">
                <Link href={'https://www.linkedin.com/in/abdhulla-atthaullasha/'} target="_blank"  className="border rounded-full p-4 w-10 h-10 flex justify-center items-center ">
                    <i className='bx bxl-linkedin ' ></i>
                </Link>
                <Link href={'https://github.com/Abdhulla1'} target="_blank" className="border rounded-full p-4 w-10 h-10 flex justify-center items-center ">
                    <i className='bx bxl-github' ></i>
                </Link>
            </div>
      </div>
    </footer>
  );
}
