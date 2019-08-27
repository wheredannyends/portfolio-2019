import React, { useEffect, useState } from 'react';
import { FiBriefcase, FiClock } from 'react-icons/fi';
import useObserver from '../hooks/use-observer';
import Image from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import useMobileCheck from '../hooks/use-mobile-check';

const ProjectCard = ({ project }) => {
   const [imgPos, setImgPos] = useState(0);
   const [cardEntry, cardRef] = useObserver({ threshold: 0.2 });
   const isMobile = useMobileCheck();

   useEffect(() => {
      if (!isMobile && cardEntry.isIntersecting) {
         console.log('scroll on');
         window.addEventListener('scroll', setImagePosition, true);
         return () => {
            console.log('scroll off');
            window.removeEventListener('scroll', setImagePosition, true);
         };
      }
      console.log(cardEntry);
   }, [isMobile, cardEntry.isIntersecting]);

   const setImagePosition = () => {
      const imageEl = cardRef.current.getBoundingClientRect();
      const midOffset =
         (window.innerHeight / 2 - (imageEl.height / 2 + imageEl.y)) / 4;

      setImgPos(() => midOffset.toFixed());
   };

   return (
      <article className="project-card" ref={cardRef}>
         <div
            className="project-card__image"
            style={{
               opacity: `${cardEntry.isIntersecting ? 1 : 0}`,
               transform: `translateY(${imgPos}px)`,
            }}
         >
            <Image
               fadeIn={false}
               className="project-card__image-component"
               fluid={project.image.sharp.fluid}
            ></Image>
         </div>
         <div
            className={`project-card__content ${cardEntry.isIntersecting &&
               'active'}`}
         >
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
            <a
               href={project.url}
               target="_blank"
               className="button project-card__button"
            >
               View Project
            </a>
         </div>
      </article>
   );
};

export default ProjectCard;
