import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectCard({ image, title, skills, link }) {
  return (
    <div className="md-2 w-[300px]">
      <div className=" h-[180px]">
        <Image
          src={image}
          alt="project"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-between items-center ">
        <div>
          <h2 className="font-semibold text-xl lg:text-1xl mt-8">
            {title}
          </h2>
          <h2 className="mt-3 text-sm lg:text-mg w-40">{skills.join(', ')}</h2>
        </div>
        <Link
          href={link}
          target="_blank"
          className="flex justify-center items-center bg-[#4FC3F7] p-3 h-10 w-10 mt-auto rounded-full"
        >
          <svg
            width="24"
            height="23"
            viewBox="0 0 24 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.4255 3.49609L5.24243 16.6792"
              stroke="white"
              strokeWidth="1.41248"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.4255 13.1668V3.49609H8.75479"
              stroke="white"
              strokeWidth="1.41248"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
