"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { GoMoveToBottom } from "react-icons/go";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    gsap.to("#my-img", {
      y: 260,
      skew: 30,
      duration: 2.5,
      ease: "slow(0.7,0.7,false)",
    });

    gsap.to("#my-name", {
      y: 260,
      duration: 3,
      ease: "expoScale(0.5,7,none)",
    });

    gsap.to("#my-special", {
      y: 260,
      duration: 3,
      ease: "expoScale(0.5,7,none)",
    });
  }, []);

  const technologies = [
    // Languages & Frameworks
    { name: "HTML", logo: "/logos/html.svg", color: "#E34F26" },
    { name: "CSS", logo: "/logos/css.svg", color: "#1572B6" },
    { name: "JavaScript", logo: "/logos/javascript.svg", color: "#F7DF1E" },
    { name: "TypeScript", logo: "/logos/typescript.svg", color: "#3178C6" },
    // Libraries & Tools
    { name: "React.js", logo: "/logos/react.svg", color: "#61DAFB" },
    { name: "Next.js", logo: "/logos/nextjs.svg", color: "#000000" },
    { name: "Vite", logo: "/logos/vite.svg", color: "#646CFF" },
    { name: "Electron.js", logo: "/logos/electron.svg", color: "#47848F" },
    // Styling
    { name: "Tailwind CSS", logo: "/logos/tailwind.svg", color: "#38BDF8" },
    { name: "Materialize", logo: "/logos/materialize.svg", color: "#EE6E73" },
    { name: "Sass", logo: "/logos/sass.svg", color: "#CC6699" },
    // State Management
    { name: "Context API", logo: "/logos/context.svg", color: "#61DAFB" },
    { name: "Redux", logo: "/logos/redux.svg", color: "#764ABC" },
    // Animations & Charts
    { name: "GSAP", logo: "/logos/gsap.svg", color: "#88CE02" },
    { name: "Chart.js", logo: "/logos/chartjs.svg", color: "#FF6384" },
    { name: "React Slick", logo: "/logos/slick.svg", color: "#00D1B2" },
    { name: "lenis", logo: "/logos/lenis.svg", color: "#FF6D00" },
    // Database & APIs
    { name: "PostgreSQL", logo: "/logos/postgresql.svg", color: "#336791" },
    { name: "REST API", logo: "/logos/rest.svg", color: "#FF6F61" },
    { name: "API Routes", logo: "/logos/api.svg", color: "#000000" },
    { name: "Prisma", logo: "/logos/prisma.svg", color: "#0C344B" },
    // Version Control
    { name: "Git", logo: "/logos/git.svg", color: "#F05032" },
    { name: "GitHub", logo: "/logos/github.svg", color: "#181717" },
  ];

  return (
    <>
      <div
        className="h-screen overflow-y-scroll snap-y snap-mandatory"
        dir="ltr"
      >
        <section className="min-h-screen snap-start text-center bg-zinc-900 text-slate-100 p-3">
          <div className="flex flex-col items-center justify-center mb-25">
            <img
              id="my-img"
              src="/img/me.jpg"
              alt="آریا"
              className="w-36 h-36 rounded-full border-4 border-sky-400 shadow-[0_0_25px_rgba(56,189,248,0.5)] object-cover mb-8"
            />
            <h1 id="my-name" className="text-3xl sm:text-4xl font-bold mb-5">
              آریا حسینی
            </h1>
            <p id="my-special" className="text-lg sm:text-xl text-slate-400">
              Front-End Developer
            </p>
            {showButton && (
              <div className="mt-80 flex flex-row items-center justify-center animate-fade-in">
                <span className="text-center">برو به پایین</span>
                <GoMoveToBottom size={22} />
              </div>
            )}
          </div>
        </section>

        <section
          id="sec2"
          className="min-h-screen snap-start flex justify-center items-center bg-zinc-800"
        >
          <div className="flex flex-col items-center justify-center space-y-5 ">
            <h3 className="text-amber-50 text-2xl">درباره من</h3>
            <div className="w-260">
              <p className="text-center text-gray-100">
                I’m Aria Hosseini, a Front-End Web Developer with 3+ years of
                experience building modern, dynamic web applications. I enjoy
                creating seamless, scalable interfaces and continuously learning
                to improve my craft. Flexible, creative, and team oriented.
              </p>
            </div>
          </div>
        </section>

        <section className="min-h-screen snap-start flex justify-center items-center bg-zinc-900">
          <div className="flex flex-col items-center justify-center space-y-5">
            <h3 className="text-amber-50 text-2xl">تکنولوژی‌ها</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="w-20 h-20 flex items-center justify-center bg-zinc-700 grayscale hover:grayscale-0 transition duration-300 rounded-md"
                  style={{
                    boxShadow: `0 0 15px ${tech.color}50`,
                  }}
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-12 h-12 object-contain transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="sec4"
          className="min-h-screen snap-start flex justify-center items-center bg-zinc-900"
        >
          <span className="text-amber-50 text-2xl">تجربیات</span>
        </section>

        <section
          id="sec4"
          className="min-h-screen snap-start flex justify-center items-center bg-zinc-900"
        >
          <span className="text-amber-50 text-2xl">پروژه ها</span>
        </section>
      </div>
    </>
  );
}
