"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import HeroSection from "../../components/HeroSection";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Form from "../../components/Form";
import Projects from "../../components/Projects";


export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Prevent mismatches by not rendering until client loads
  if (!mounted) return null;
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section id="projects">
        <Projects/>
      </section>
      <section id="contact" >
        <Form/>
      </section>
    </main>
  );
}
