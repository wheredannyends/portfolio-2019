import React, { useState, useEffect } from 'react';
import useProjects from '../queries/use-projects';
import ProjectCard from '../components/project-card';

const Projects = () => {
   const projects = useProjects();
   const [scrollPos, setScrollPos] = useState(0);

   useEffect(() => {
      window.addEventListener('scroll', () => {
         setScrollPos(() => window.scrollY);
      });
   }, []);

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
