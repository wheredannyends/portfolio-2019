import React from 'react';
import { Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ProjectCard = ({ project }) => {
   return (
      <Link
         to={`/work/${project.slug}`}
         className={`project-card project-card--${project.slug}`}
      >
         <BackgroundImage
            Tag="div"
            className="project-card__banner"
            fluid={project.image.sharp.fluid}
            fadeIn="soft"
         ></BackgroundImage>
         <div className="project-card__label">
            <h5 className="project-card__title">
               {project.title}
               <i className="project-card__arrow far fa-angle-right"></i>
            </h5>
            <p className="project-card__subtitle">{project.subtitle}</p>
         </div>
      </Link>
   );
};

export default ProjectCard;
