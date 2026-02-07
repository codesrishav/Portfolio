'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50) {
        if (currentScrollY > lastScrollY.current) {
          setIsVisible(false); // Scrolling down
        } else {
          setIsVisible(true); // Scrolling up
        }
      } else {
        setIsVisible(true); // At top
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`w-full h-fit grid relative place-items-center bg-[var(--hack-bg)] pt-[90px] pb-[80px] md:pt-[132px] md:pb-[50px] top-10`}
    >
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-50 flex justify-center pt-4 md:pt-14">
        <div className="w-full max-w-[1100px] flex justify-between md:w-[85%] px-8 md:px-0">
          <div className="text-xl font-normal">Rishav</div>
          <div className="text-sm font-normal flex items-center gap-6">
            <a 
              href="/MyResume.pdf"
              target="_blank"
              rel="xeylous resume"
              className="group relative flex items-center justify-center font-medium text-[var(--linear-grey)] transition-colors duration-300 ease-out hover:text-white"
            >
              Resume
              <div className="absolute w-full h-[2px] bg-[var(--linear-grey)] left-0 -bottom-[2px] scale-x-0 origin-bottom-right transition-transform duration-250 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left" />
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="w-full max-w-[1100px] h-fit flex items-center justify-between flex-col lg:flex-row lg:w-[85%] px-6 md:px-0 mt-0">
        {/* Text Section */}
        <div className="w-full lg:w-auto h-fit text-left flex flex-col items-start md:items-center md:text-center lg:items-start lg:text-left justify-between">
          <div className="w-full lg:w-[420px] h-auto mx-auto lg:mx-0 mt-12 lg:mt-16">
            {/* Gradient Headings */}
            <div className="relative h-fit w-max md:mx-auto lg:mx-0 overflow-hidden mb-[30px] bg-clip-text text-transparent bg-[length:500%_500%] animate-[slime_45s_ease_infinite] bg-gradient-to-r from-[#fde1ff] via-[#e0e7ff] to-[#daf1ff] via-[#fffae9] to-[#fde1ff]">
             <style jsx>{`
                .gradient-text {
                   background: linear-gradient(
                    76deg,
                    #fde1ff,
                    #e0e7ff,
                    #e0f9ff,
                    #fffae9,
                    #e8eaff,
                    #ffe3f7,
                    #daf1ff,
                    #fde1ff,
                    #e0e7ff,
                    #e0f9ff,
                    #fffae9,
                    #e8eaff,
                    #ffe3f7,
                    #daf1ff,
                    #fde1ff,
                    #e0e7ff,
                    #e0f9ff,
                    #fffae9,
                    #e8eaff,
                    #ffe3f7,
                    #daf1ff
                  );
                  background-size: 500% 500%;
                  background-clip: text;
                  -webkit-background-clip: text;
                  color: rgba(255, 255, 255, 0);
                }
             `}</style>
              <div className="gradient-text pl-0 lg:pl-0">
                <h1 className="text-[2.5em] md:text-[3em] lg:text-[4em] font-black leading-[1.2] -tracking-[0.03em] lg:tracking-[2px] capitalize">
                  Full Stack
                </h1>
                <h1 className="text-[2.5em] md:text-[3em] lg:text-[4em] font-black leading-[1.2] -tracking-[0.03em] lg:tracking-[2px] capitalize">
                  Developer<span className="text-[var(--linear-grey)]">.</span>
                </h1>
              </div>
            </div>

            <p className="m-0 mt-[0.7rem] text-[var(--linear-grey)] font-medium leading-[1.8] w-full lg:w-full pl-0 lg:pl-0 md:text-center lg:text-left">
              I build end-to-end digital products that are scalable, reliable and crafted with strong attraction to user experience.
            </p>
          </div>

          <div className="w-full lg:w-max h-fit flex items-start md:items-center md:justify-center lg:items-center lg:justify-between mb-8 lg:mb-[1.2rem] mt-[40px] lg:mt-[90px] gap-x-[30px] lg:gap-x-[50px] pl-0 lg:pl-0">
            <p className="max-w-[40%] md:max-w-[45%] lg:max-w-[220px] h-fit leading-[1.5] text-[0.6em] md:text-[0.8em] lg:text-[0.9em] md:text-center lg:text-left">
              I create real world products with clean, scalable code.
            </p>

            <p className="max-w-[50%] md:max-w-[45%] lg:max-w-[220px] h-fit leading-[1.5] text-[0.6em] md:text-[0.8em] lg:text-[0.9em] md:text-center lg:text-left">
              Focused on performance and long-term maintainability.
            </p>
          </div>
        </div>
{/* Profile Photo Section */}
<div className="flex justify-center my-10 sm:my-16 lg:my-0">
  <div className="relative inline-block">
    {/* Image */}
    <img
      src="assets/Profile.jpeg"
      alt="Xeylous's Picture"
      className="block w-[200px] xs:w-[240px] sm:w-[280px] md:w-[360px] lg:w-[400px] h-auto object-contain"
    />

    {/* Outline exactly around the image */}
    <span className="absolute top-0 left-0 w-full h-full border-2 border-[var(--linear-grey)] opacity-60"></span>
  </div>
</div>


      </div>
    </header>
  );
}
