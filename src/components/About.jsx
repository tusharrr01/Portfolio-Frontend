import React from 'react';
import { ArrowDown } from 'lucide-react';

export const About = () => {
  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold tracking-[0.28em] uppercase text-accent">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
            The person behind the code
          </h2>
          <p className="max-w-2xl mx-auto text-text-secondary text-sm sm:text-base">
            I&apos;m a curious builder who enjoys turning complex ideas into intuitive digital
            experiences, from first sketch to deployed product.
          </p>
        </div>

        <div className="space-y-8">


          <div className="grid gap-8 md:grid-cols-[1.3fr,1fr]">
            <div className="rounded-2xl border border-border bg-card/80 px-8 pt-6  max-w-xl">
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-text-muted mb-2">
                Internship
              </p>
              <h3 className="text-lg font-semibold text-accent mb-1">
                CODYNET INFOTECH
              </h3>
              <p className="text-xs text-text-muted mb-3">10<sup>th</sup> December, 2025 – 23<sup>th</sup> January, 2026</p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• Built a single-page React app integrating the News API.</li>
                <li>• Focused on reusable components and responsive UI patterns.</li>
                <li>• Practiced state management with React hooks.</li>
                <li>• it fetches the news from the newsapi.org and categories the news into different categories.</li>
              </ul>
              <div className="mt-8 flex gap-4 justify-start">

              <a
                onClick={() => window.open('/Documents/CODYNET_Certification.pdf', '_blank')}
                target="_blank"
                rel="noopener noreferrer"
                className="max-w-36 flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary-dark"
              >
                Certificate
              </a>
              <a
                href="https://potato-press-react.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className=" max-w-36 flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-accent px-5 py-2 text-sm font-semibold text-accent hover:bg-accent hover:text-background"
              >
                View Project
              </a>
              </div>



            </div>

            <div className="rounded-2xl border border-border bg-card/80 p-8">
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-text-muted mb-2">
                Education
              </p>
              <div className="space-y-4 text-sm">
                <div className="border border-border/80 rounded-xl p-3">
                  <h4 className="font-semibold text-accent mb-1">SUMAN HIGH SCHOOL No. 3</h4>
                  <p className="text-text-muted text-xs">10<sup>th</sup> SSC Board · 2021</p>
                </div>
                <div className="border border-border/80 rounded-xl p-3">
                  <h4 className="font-semibold text-accent mb-1">SUMAN HIGH SCHOOL No. 3</h4>
                  <p className="text-text-muted text-xs">12<sup>th</sup> HSC Board · 2023</p>
                </div>
                <div className="border border-border/80 rounded-xl p-3">
                  <h4 className="font-semibold text-accent mb-1">VIVEKANAND COLLEGE</h4>
                  <p className="text-text-muted text-xs">
                    Bachelor of Computer Application
                  </p>
                  <p className="text-text-muted text-xs">
                    2023 – 2026 (Expected)
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none">
        <button
          onClick={() => scrollToSection('#skills')}
          className="pointer-events-auto absolute bottom-6 right-6 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent/80 bg-background/80 text-text-secondary shadow-lg backdrop-blur hover:border-accent hover:text-accent"
        >
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
