import React from "react";
import Image from "next/image";
export default function Card({ icon, title, description, className }) {
  return (
    <div
      className={`flex flex-col justify-start items-start border-2 backdrop-blur-lg z-0 bg-white/30  dark:bg-[linear-gradient(135deg,rgba(28,28,28,0.2)_0%,#050505_100%)] 
    dark:mix-blend-screen  border-white/50 dark:border-[#2B2B2B] rounded-lg p-5 gap-2 ${className} hover:scale-105 transition-all ease-in-out cursor-pointer `}
    >
      <Image
        src={icon}
        height={50}
        width={50}
        alt="react"
        className="rounded-md object-cover bg-no-repeat bg-center "
      />
      <h2 className="font-bold text-2xl">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
}
