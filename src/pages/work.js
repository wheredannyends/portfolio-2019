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
      <section className="outer-wrap work">
         <ul className="work__projects">
            {projects.map(project => (
               <ProjectCard
                  key={project.slug}
                  slug={project.slug}
                  project={project}
               ></ProjectCard>
            ))}
         </ul>
         <div
            className={`work__scroll ${scrollPos > 100 &&
               'work__scroll--hidden'}`}
         >
            <p className="work__scroll-text">Scroll</p>
            <FiArrowDown className="work__scroll-icon"></FiArrowDown>
         </div>
      </section>
   );
};

export default Projects;
