'use client';
import React, { useRef } from 'react';
import IconArrowUp from '../../public/assets/icons/IconArrowUp';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef(null);

  const projects = [
  {
    id: 1,
    name: "AyurSaathi",
    tags: "Next.js / React / Tailwind CSS",
    description:
      "Group project developed for Smart India Hackathon (SIH) addressing a problem statement by the Ministry of AYUSH. Contributed as a frontend developer, building responsive, SEO-friendly pages and reusable UI components integrated with backend APIs.",
    url: "https://ayur-sathi.vercel.app/"
  },
  {
    id: 2,
    name: "Food Delivery Web Application",
    tags: "React / Node.js / Express / MongoDB",
    description:
      "Full-stack food delivery web application featuring user authentication, menu browsing, and food ordering workflows. Built RESTful APIs, implemented JWT-based authentication, and deployed the application on Vercel.",
    url: "https://food-express-gilt.vercel.app/"
  },
  {
    id: 3,
    name: "ElevateBPM – Client Process Mapping",
    tags: "React / Next.js / Tailwind CSS",
    description:
      "Modern, responsive client process mapping platform focused on performance and SEO. Built dynamic UI components, integrated REST APIs, and added smooth animations to enhance user experience.",
    url: "https://elevate-v2.vercel.app/"
  },
  {
    id: 4,
    name: "Weather Forecast Web Application",
    tags: "React / JavaScript / Weather API",
    description:
      "Early-stage React project demonstrating API integration and state management. Displays real-time weather data, 7-day forecasts, and Celsius/Fahrenheit conversion with custom application logic.",
    url: "https://weather-forecast-eight-gules.vercel.app/"
  },
  {
    id: 5,
    name: "Telaiya Tourism",
    tags: "React / UI Design / Responsive Web",
    description:
      "Tourism website showcasing Telaiya Dam and nearby attractions. Designed a visually appealing, responsive interface to highlight destinations, activities, and local tourism information.",
    url: "https://telaiya-tourism.vercel.app/"
  },
  {
  id: 6,
  name: "Online Code Editor",
  tags: "HTML / CSS / JavaScript / Web App",
  description:
    "Web-based online code editor that allows users to write and compile HTML, CSS, and JavaScript in real time. Features live preview, responsive layout, and a clean UI for practicing front-end development.",
  url: "https://your-code-editor-link.vercel.app/"
}

];


  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(".project-card",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-[60px] sm:py-[80px] md:py-[100px] w-full grid place-items-center bg-[var(--hack-bg)] h-fit" id="projects">
      <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 px-0 sm:px-4 md:px-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card w-full min-h-[280px] sm:min-h-[300px] p-5 sm:p-6 md:p-8 bg-[rgb(22,22,26)] flex flex-col justify-between relative group rounded-2xl border border-[#ffffff10] hover:border-[#ffffff30] transition-colors duration-300"
          >
            <div className="flex flex-col gap-3 sm:gap-4 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#fff] to-[var(--linear-grey)] bg-clip-text text-transparent capitalize leading-tight font-[family-name:var(--font-dosis)]">
                {project.name}
              </h3>
              <small className="text-[10px] sm:text-xs font-semibold tracking-wider text-[var(--linear-grey)] uppercase opacity-80">
                {project.tags}
              </small>
              <p className="text-[var(--linear-grey)] text-xs sm:text-sm leading-relaxed font-[family-name:var(--font-poppins)] opacity-90">
                {project.description}
              </p>
            </div>

            <div className="w-full mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-[#ffffff10] flex justify-center sm:justify-start">
              <a
                href={project.url}
                target="_blank"
                rel="xeylous project"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--linear-grey)] uppercase tracking-widest font-[family-name:var(--font-dosis)] group-hover:text-white transition-colors duration-300"
              >
                <div className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                 <IconArrowUp />
                </div>
                view project
              </a>
            </div>

            {/* Bottom Border Effect */}
            <div className="absolute w-full h-[2px] bg-[var(--linear-grey)] left-0 bottom-0 scale-x-0 origin-right transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:origin-left rounded-b-2xl" />
          </div>
        ))}
      </div>
    </section>
  );
}
