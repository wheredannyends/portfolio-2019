import React from 'react';
import useProjects from '../queries/use-projects';
import ProjectCard from '../components/project-card';

const Projects = () => {
   const projects = useProjects();
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
      </section>
   );
};

export default Projects;
