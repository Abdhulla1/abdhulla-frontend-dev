"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import HeroSection from "../../components/HeroSection";
import About from "../../components/About";
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
      <section id="projects" className="pt-20 mt-40 h-full">
        <h2>projects Me</h2>
      </section>
    </main>
  );
}
