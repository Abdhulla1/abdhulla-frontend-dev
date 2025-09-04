import React from "react";
import Link from "next/link";
export default function About() {
  return (
    <div className="mt-30 flex flex-col gap-2 justify-center items-center p-20  lg:px-28 w-screen">
      <h2 className="text-2xl lg:text-4xl font-bold ">About Me </h2>
      <h4 className="text-sm lg:text-md text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3F7] to-black dark:to-white">
        Get to know me
      </h4>
      <p className=" mt-4 lg:mt-16 text-sm lg:text-lg max-w-2xl lg:max-w-7xl">
        As a frontend developer with a strong sense of design and functionality, I’m passionate about creating seamless, responsive, and accessible digital experiences. My journey into development began with a deep curiosity about how the web works — what started as simple experimentation quickly evolved into a full commitment to mastering frontend technologies. Over the past 1+ year, I’ve worked on real-time projects that gave me hands-on experience in solving real-world problems and collaborating in team environments. I’ve built a solid foundation in HTML, CSS, JavaScript, and modern frameworks like React and Next.js, while also developing a keen eye for UI/UX with tools like Figma. I enjoy turning concepts into fully functional interfaces that not only look great but are intuitive and user-friendly. With a focus on clean, scalable code and attention to detail, I strive to deliver frontend solutions that are both efficient and impactful. I believe great development is where creativity meets structure — and I’m excited to keep growing and building in that space.

      </p>{" "}
      <Link
        href="https://drive.usercontent.google.com/download?id=1j7g_gkrbttcE6pulUsy_tNQQ8dkzHtc1&export=download"
        className=" mt-7 block py-2 px-5 text border-2 rounded-2xl border-[#4FC3F7]"
      >
        {" "}
        Download Resume
      </Link>
    </div>
  );
}
