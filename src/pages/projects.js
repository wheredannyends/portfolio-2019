import React, { useState, useEffect } from 'react';
import useProjects from '../queries/use-projects';
import ProjectCard from '../components/project-card';
import { FiArrowDown } from 'react-icons/fi';

const Projects = () => {
   const projects = useProjects();
   const [scrollPos, setScrollPos] = useState(0);

   const listener = () => {
      setScrollPos(() => window.scrollY);
   };

   useEffect(() => {
      window.addEventListener('scroll', listener, true);
      return () => {
         window.removeEventListener('scroll', listener, true);
      };
   }, []);

   return (
      <section className="outer-wrap projects">
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
