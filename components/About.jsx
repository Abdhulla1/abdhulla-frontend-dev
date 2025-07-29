import React from "react";
import Link from "next/link";
export default function About() {
  return (
    <div className="h-screen flex flex-col gap-2 justify-center items-center p-20  lg:px-28 w-screen">
      <h2 className="text-2xl lg:text-4xl font-bold ">About Me </h2>
      <h4 className="text-sm lg:text-md text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3F7] to-black dark:to-white">
        Get to know me
      </h4>
      <p className=" mt-4 lg:mt-16 text-sm lg:text-lg max-w-2xl lg:max-w-7xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
        obcaecati illum voluptatem atque amet harum aliquam eveniet! Rem
        quibusdam delectus quod. Natus reiciendis tenetur cum accusantium illo
        soluta maxime nam. Aperiam, quae labore? Accusantium id dicta laudantium
        reiciendis voluptas nesciunt voluptate corporis nulla, error
        consequuntur ad quo illo minus quia similique quasi aliquid magnam
        perspiciatis quibusdam. Iusto aperiam dolore eligendi, veritatis earum
        aspernatur commodi, repudiandae dolorum sequi impedit beatae at.
      </p>{" "}
      <Link
        href="https://drive.usercontent.google.com/download?id=1br76OuoXoq3ov31rRVWYvkzjazCDoCJ5&export=download"
        className=" mt-7 block py-2 px-5 text border-2 rounded-2xl border-[#4FC3F7]"
      >
        {" "}
        Download Resume
      </Link>
    </div>
  );
}
