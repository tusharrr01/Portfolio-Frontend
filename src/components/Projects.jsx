import React, { useState } from 'react';
import { projects } from '../lib/projects';
import { Github, ExternalLink, X, ArrowDown } from 'lucide-react';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <p className="text-xs font-semibold tracking-[0.28em] uppercase text-accent">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
            Things I&apos;ve been building
          </h2>
          <p className="max-w-2xl mx-auto text-text-secondary text-sm sm:text-base">
            A selection of projects that highlight my experience with frontend, backend, and
            everything in between.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative cursor-pointer overflow-hidden rounded-3xl bg-card/80 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 hover:scale-102"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={
                    project.image ||
                    `https://placehold.co/600x400?text=${encodeURIComponent(project.title)}`
                  }
                  alt={project.title}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/600x400?text=${encodeURIComponent(
                      project.title,
                    )}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white drop-shadow-md">
                  {project.title}
                </h3>
              </div>

              <div className="space-y-4 p-6">
                <p className="text-sm text-text-secondary line-clamp-3">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="relative max-w-3xl w-full overflow-hidden rounded-3xl border border-accent/60 bg-background/95 shadow-[0_0_60px_rgba(8,47,73,0.8)] backdrop-blur"
              onClick={(e) => e.stopPropagation()}
            >

              <div className="relative h-60 overflow-hidden ">
                <img
                  src={
                    selectedProject.image ||
                    `https://placehold.co/900x400?text=${encodeURIComponent(
                      selectedProject.title,
                    )}`
                  }
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/900x400?text=${encodeURIComponent(
                      selectedProject.title,
                    )}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>

              <div className="space-y-6 p-6 sm:p-8">
                <div className="space-y-2">
                  <p className="text-xs font-semibold tracking-[0.24em] uppercase text-accent">
                    Project
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-text-primary">
                    {selectedProject.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-accent tracking-wide uppercase">
                    Tech stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-background px-3 py-1 text-xs text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                  {/* Frontend / Backend repos if provided */}
                  {selectedProject.githubFrontend && (
                    <a
                      href={selectedProject.githubFrontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[10rem] inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark"
                    >
                      <Github className="h-4 w-4" />
                      <span>Frontend repo</span>
                    </a>
                  )}
                  {selectedProject.githubBackend && (
                    <a
                      href={selectedProject.githubBackend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[10rem] inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark"
                    >
                      <Github className="h-4 w-4" />
                      <span>Backend repo</span>
                    </a>
                  )}

                  {/* Single repo fallback */}
                  {!selectedProject.githubFrontend &&
                    !selectedProject.githubBackend &&
                    selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[10rem] inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark"
                      >
                        <Github className="h-4 w-4" />
                        <span>View repository</span>
                      </a>
                    )}

                  {/* Live demo only when available */}
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[10rem] inline-flex items-center justify-center gap-2 rounded-full border border-accent px-5 py-3 text-sm font-semibold text-accent hover:bg-accent hover:text-background"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Open live demo</span>
                    </a>
                  )}
                </div>

                {!selectedProject.demo && (
                  <p className="text-xs text-text-muted">
                    Live demo not available yet for this project.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="pointer-events-none">
          <button
            onClick={() => scrollToSection('#contact')}
            className="pointer-events-auto absolute bottom-6 right-6 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent/80 bg-background/80 text-text-secondary shadow-lg backdrop-blur hover:border-accent hover:text-accent"
          >
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
