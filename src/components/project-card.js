import React, { useRef, useEffect, useState } from 'react';
import { FiBriefcase, FiClock } from 'react-icons/fi';
import useIntersect from '../hooks/use-observer';
import Image from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const ProjectCard = ({ project }) => {
   const projectImage = useRef();
   const [imgPos, setImgPos] = useState(0);

   const setImagePosition = () => {
      const imageEl = projectImage.current.getBoundingClientRect();
      const midOffset =
         (window.innerHeight / 2 - (imageEl.height / 2 + imageEl.y)) / 4;

      return midOffset.toFixed();
   };

   useEffect(() => {
      setImgPos(() => setImagePosition());

      document.addEventListener('scroll', () => {
         setImgPos(() => setImagePosition());
      });
   }, []);

   return (
      <article className="project-card">
         <div
            className="project-card__image"
            ref={projectImage}
            style={{
               transform: `translateY(${imgPos}px)`,
            }}
         >
            <Image
               className="project-card__image-component"
               fluid={project.image.sharp.fluid}
            ></Image>
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
