import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

export const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-10 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-accent/25 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:grid lg:grid-cols-2 lg:items-center">
        {/* Left: text / CTA */}
        <div className="space-y-8 text-center lg:text-left">
          <div>
            <h1 className="mt-6 text-4xl sm:text-[2.5rem] lg:text-[3.2rem] xl:text-[3.4rem] font-black leading-tight">
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Welcome,
              </span>
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                To My Portfolio.
              </span>
            </h1>
            <h1 className="text-4xl sm:text-[2.9rem] lg:text-[3.6rem] xl:text-[4.2rem] font-black leading-tight">
              <span className="block text-text-primary">Tushar Kaklotar</span>
            </h1>

          </div>
          <p className="max-w-2xl text-sm sm:text-[0.92rem] text-text-secondary mx-auto lg:mx-0 pl-8">
            Full‑stack developer crafting performant, maintainable apps with React, Node.js,
            Express, and MongoDB — with extra attention to smooth UX and polished details.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 lg:pl-3">
            <button
              onClick={() => window.open('/Documents/Resume.pdf', '_blank')}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5 hover:shadow-xl"
            >
              <span>See My Resume</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => scrollToSection('#contact')}
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-7 py-3 text-sm sm:text-base font-semibold text-text-primary backdrop-blur hover:border-accent hover:text-accent"
            >
              Let&apos;s collaborate
            </button>
          </div>
        </div>

        {/* Right: visual / hero card */}
        <div className="relative hidden lg:flex items-center justify-center">
          <div className="absolute inset-0 -z-10">
            <div className="absolute right-4 top-6 h-32 w-32 rounded-full border border-accent/40 bg-accent/10" />
            <div className="absolute left-0 bottom-4 h-40 w-40 rounded-[2.5rem] border border-primary/30 bg-primary/10" />
          </div>

          <div className="w-full h-auto">
            <img
              src="/illustration.png"
              alt="Hero illustration"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none">
        <button
          onClick={() => scrollToSection('#about')}
          className="pointer-events-auto absolute bottom-6 right-6 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent/80 bg-background/80 text-text-secondary shadow-lg backdrop-blur hover:border-accent hover:text-accent"
        >
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
