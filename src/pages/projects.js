import React, { useState, useEffect, useCallback } from 'react';
import useProjects from '../queries/useProjects';
import ProjectCard from '../components/ProjectCard';
import { FiArrowDown } from 'react-icons/fi';

const Projects = () => {
   const projects = useProjects();
   const [scrollPos, setScrollPos] = useState(0);

   const listener = useCallback(() => {
      setScrollPos(() => window.scrollY);
   }, []);

   useEffect(() => {
      window.addEventListener('scroll', listener, true);

      return () => {
         window.removeEventListener('scroll', listener, true);
      };
   }, []);

   return (
      <section className="container projects">
         <ul className="projects__projects">
            {projects.map((project, index) => (
               <ProjectCard
                  key={project.slug}
                  slug={project.slug}
                  project={project}
                  index={index}
               ></ProjectCard>
            ))}
         </ul>
         <div
            className={`projects__scroll ${scrollPos > 100 &&
               'projects__scroll--hidden'}`}
         >
            <p className="projects__scroll-text">Scroll</p>
            <FiArrowDown className="projects__scroll-icon"></FiArrowDown>
         </div>
      </section>
   );
};

export default Projects;

