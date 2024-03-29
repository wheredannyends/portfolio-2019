import React, { useEffect, useState, useRef } from 'react';
import { Back, TimelineLite } from 'gsap';
import { FiBriefcase, FiClock } from 'react-icons/fi';
import { GatsbyImage } from 'gatsby-plugin-image';
import useObserver from '../hooks/use-observer';

const ProjectCard = ({ project, index, children }) => {
   const [imgPos, setImgPos] = useState(0);
   const [cardEntry, cardRef] = useObserver({ threshold: 0.3 });

   let [
      imageWrapRef,
      contentWrapRef,
      titleRef,
      subtitleRef,
      stackRef,
      listRef,
      descriptionRef,
      buttonRef,
   ] = useRef(null);

   useEffect(() => {
      let TL = new TimelineLite();

      const animation = {
         settings: [
            2,
            {
               opacity: 0,
               x: 50,
               ease: Back.easeOut,
            },
         ],
         delay: '-=1.8',
      };

      TL.to([imageWrapRef, contentWrapRef], 0, {
         css: { visibility: 'visible' },
      })
         .from(imageWrapRef, 2, {
            opacity: 0,
            scale: 0.5,
            rotation: -15,
            ease: Back.easeOut,
         })
         .from(titleRef, ...animation.settings, animation.delay)
         .from(subtitleRef, ...animation.settings, animation.delay)
         .from(stackRef, ...animation.settings, animation.delay)
         .from(listRef, ...animation.settings, animation.delay)
         .from(descriptionRef, ...animation.settings, animation.delay)
         .from(buttonRef, ...animation.settings, animation.delay);
      return () => {
         TL.kill();
      };
   }, []);

   const setImagePosition = () => {
      const imageEl = cardRef.current.getBoundingClientRect();
      const windowMid = window.innerHeight / 2;
      const imageMid = imageEl.height / 2 + imageEl.y;
      const imageOffset = (windowMid - imageMid) / 5;
      setImgPos(() => imageOffset.toFixed());
   };

   useEffect(() => {
      if (cardEntry.isIntersecting) {
         window.addEventListener('scroll', setImagePosition, true);
         return () => {
            window.removeEventListener('scroll', setImagePosition, true);
         };
      }
   }, [cardEntry.isIntersecting]);

   console.log(project);

   return (
      <article className="project-card" ref={cardRef}>
         <div
            className="project-card__image-wrap"
            ref={el => (imageWrapRef = el)}
         >
            <div
               className="project-card__image"
               style={{
                  opacity: cardEntry.isIntersecting ? 1 : 0,
                  transform: `translateY(${imgPos}px)`,
               }}
            >
               <GatsbyImage
                  image={project.image.childImageSharp.gatsbyImageData}
                  fadeIn={false}
               />
            </div>
         </div>

         <div
            className={`project-card__content ${cardEntry.isIntersecting &&
               'active'}`}
            ref={el => (contentWrapRef = el)}
            style={{
               opacity: cardEntry.isIntersecting ? 1 : 0,
               transform: cardEntry.isIntersecting
                  ? 'none'
                  : `translateX(${index % 2 === 0 ? '4rem' : '-4rem'})`,
            }}
         >
            <h2 className="project-card__title" ref={el => (titleRef = el)}>
               {project.title}
            </h2>

            <h5
               className="project-card__subtitle"
               ref={el => (subtitleRef = el)}
            >
               {project.subtitle}
            </h5>

            <ul className="project-card__stack" ref={el => (stackRef = el)}>
               {project.stack.map((item, index) => (
                  <li className="project-card__stack-item" key={index}>
                     {item}
                  </li>
               ))}
            </ul>

            <ul className="project-card__info" ref={el => (listRef = el)}>
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

            <p
               className="project-card__description"
               ref={el => (descriptionRef = el)}
            >
               {project.body}
            </p>

            {project.url && (
               <a
                  href={project.url}
                  target="_blank"
                  className="button project-card__button"
                  ref={el => (buttonRef = el)}
               >
                  View Project
               </a>
            )}
         </div>
      </article>
   );
};

export default ProjectCard;

