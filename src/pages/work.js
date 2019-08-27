import React, { useState, useEffect } from 'react';
import useProjects from '../queries/use-projects';
import useMobileCheck from '../hooks/use-mobile-check';
import ProjectCard from '../components/project-card';

const Projects = () => {
   const projects = useProjects();
   const [scrollPos, setScrollPos] = useState(0);
   const isMobile = useMobileCheck();

   const listener = () => {
      setScrollPos(() => window.scrollY);
   };

   useEffect(() => {
      if (!isMobile) {
         window.addEventListener('scroll', listener, true);
         return () => {
            window.removeEventListener('scroll', listener, true);
         };
      }
   }, [isMobile]);

   return (
      <section className="outer-wrap work">
         <ul className="work__projects">
            {projects.map(project => (
               <ProjectCard
                  key={project.slug}
                  slug={project.slug}
                  project={project}
                  scrollPos={scrollPos}
               ></ProjectCard>
            ))}
         </ul>
      </section>
   );
};

export default Projects;
