import React, { useEffect, useState } from 'react';
import { FiBriefcase, FiClock } from 'react-icons/fi';
import useObserver from '../hooks/use-observer';
import Image from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const ProjectCard = ({ project, scrollPos }) => {
   const [imgPos, setImgPos] = useState(0);
   const { observerEntry: imageEntry, elRef: imageRef } = useObserver({
      threshold: 0.8,
   });
   const { observerEntry: contentEntry, elRef: contentRef } = useObserver({
      threshold: 0.8,
   });

   const setImagePosition = () => {
      const imageEl = imageRef.current.getBoundingClientRect();
      const midOffset =
         (window.innerHeight / 2 - (imageEl.height / 2 + imageEl.y)) / 4;

      setImgPos(() => midOffset.toFixed());
      return;
   };

   useEffect(() => {
      setImagePosition();
   }, [scrollPos]);

   return (
      <article className="project-card">
         <div
            className="project-card__image"
            ref={imageRef}
            style={{
               opacity: `${imageEntry.isIntersecting ? 1 : 0}`,
               transform: `translateY(${imgPos}px)`,
            }}
         >
            <Image
               fadeIn={false}
               className="project-card__image-component"
               fluid={project.image.sharp.fluid}
            ></Image>
         </div>
         <div className="project-card__content" ref={contentRef}>
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
