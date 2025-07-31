import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function HeroSection() {
  return (
    <div className="h-screen flex justify-center items-center px-10 mt-30 lg:px-28 w-screen">
      <div className="flex flex-col justify-center items-center text-center gap-3 bg-[linear-gradient(to_bottom,_rgba(224,232,246,0)_0%,rgba(224,232,246,1)_100%),url('/images/grid-bg.png')]   dark:bg-[linear-gradient(to_top,_rgba(26,26,26,1)_22%,_rgba(26,26,26,0.65)_92%),url('/images/grid-bg.png')]   bg-center bg-cover lg:bg-contain bg-no-repeat inset-0 bg-blend-normal ">
        <Image
          src="/images/image-mine.jpg"
          alt="Abdhulla A"
          height={100}
          width={100}
          className="rounded-full w-30 lg:w-50 w-30 lg:h-50 object-cover border-2 border-[#4FC3F7] shadow-xl"
        />

        <h2 className="text-2xl lg:text-4xl font-bold">
          Abdhulla Atthaullasha
        </h2>
        <h4 className="text-md lg:text-xl">
          {" "}
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3F7] to-black dark:to-white">
            {" "}
            FrontEnd Developer
          </span>{" "}
          🧑🏻‍💻
        </h4>
        <p className="text-sm lg:text-lg max-w-2xl lg:max-w-7xl">
          I'm a passionate <b>Frontend Developer</b> focused on building responsive, user-friendly, and visually engaging web applications. With a strong foundation in modern technologies like React, Next.js, Tailwind CSS, and JavaScript, I specialize in turning complex ideas into sleek, high-performance digital experiences. I take pride in writing clean, scalable code and crafting interfaces that not only look great but also function seamlessly across all devices. Combining technical precision with creative thinking, I aim to deliver web solutions that are accessible, efficient, and enjoyable to use. Whether it’s collaborating with teams or working independently, I’m always driven by a desire to create meaningful, impactful user experiences through code.
        </p>

        <Link
          href="#contact"
          className=" block py-2 px-5 text border-2 rounded-2xl border-[#4FC3F7]"
        >
          {" "}
          Contact
        </Link>
      </div>
    </div>
  );
}
