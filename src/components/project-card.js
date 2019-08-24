import React, { useRef, useEffect } from 'react';
import { FiBriefcase, FiClock } from 'react-icons/fi';
import Image from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const ProjectCard = ({ project }) => {
   const projectImage = useRef();
   useEffect(() => {
      console.log(projectImage.current.getBoundingClientRect());
   }, []);
   return (
      <article className="project-card">
         <div className="project-card__image" ref={projectImage}>
            <Image fluid={project.image.sharp.fluid} fadeIn={false}></Image>
         </div>
         <div className="project-card__content">
            <h2 className="project-card__title">{project.title}</h2>
            <h5 className="project-card__subtitle">{project.subtitle}</h5>
            <ul className="project-card__info">
               <li className="project-card__info-item">
                  <FiBriefcase className="project-card__icon-label"></FiBriefcase>
                  <span className="project-card__info-value">
                     {project.role}
                  </span>
               </li>
               <li className="project-card__info-item">
                  <FiClock className="project-card__icon-label"></FiClock>
                  <span className="project-card__info-value">
                     {project.timeline}
                  </span>
               </li>
            </ul>
            <div className="project-card__description">
               <MDXRenderer>{project.body}</MDXRenderer>
            </div>
            <a href={project.url} target="_blank" className="button">
               View Project
            </a>
         </div>
      </article>
   );
};

export default ProjectCard;
