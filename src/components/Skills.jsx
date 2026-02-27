import React from 'react';
import { ArrowDown } from 'lucide-react';
import { skillCategories } from '../lib/skills';

export const Skills = () => {
  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col justify-center py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold tracking-[0.28em] uppercase text-accent">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
            Tech I work with every day
          </h2>
          <p className="max-w-2xl mx-auto text-text-secondary text-sm sm:text-base">
            From frontend polish to backend logic, these are the tools I&apos;m most comfortable
            shipping with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/80 p-6 shadow-md shadow-black/30 transition-all hover:-translate-y-1 hover:border-accent/80 hover:shadow-xl"
            >
              <div className="pointer-events-none absolute -right-10 -top-16 h-24 w-24 rounded-full bg-accent/10 blur-2xl group-hover:bg-accent/20" />
              <div className="relative space-y-4">
                <h3 className="text-lg font-semibold text-primary">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-background/80 px-3 py-1 text-xs text-text-secondary transition-colors group-hover:border-accent/60 group-hover:text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none">
        <button
          onClick={() => scrollToSection('#projects')}
          className="pointer-events-auto absolute bottom-6 right-6 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent/80 bg-background/80 text-text-secondary shadow-lg backdrop-blur hover:border-accent hover:text-accent"
        >
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
