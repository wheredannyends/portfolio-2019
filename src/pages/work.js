import React from 'react';
import useProjects from '../queries/use-projects';
import ProjectCard from '../components/project-card';
import ConvertusInfo from '../components/convertus-info';

const Projects = () => {
   const projects = useProjects();
   return (
      <section className="inner-wrap work">
         <h2 class="work__heading">Experience</h2>
         <ConvertusInfo />
         <h2 class="work__heading">Projects</h2>
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
