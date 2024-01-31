import React, { useRef, useEffect } from 'react';
import { TimelineLite, Back } from 'gsap';
import TransitionLink from 'gatsby-plugin-transition-link';
import { FiFileText } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

const App = () => {
   let [aboutRef, imageRef, bodyRef, buttonsRef] = useRef(null);

   const data = useStaticQuery(graphql`{
  file(sourceInstanceName: {eq: "images"}, name: {eq: "danny"}) {
    childImageSharp {
      gatsbyImageData(width: 500, quality: 100, layout: CONSTRAINED)
    }
  }
}`);

   useEffect(() => {
      const TL = new TimelineLite();

      const animation = {
         settings: [
            2,
            {
               opacity: 0,
               y: 50,
               scale: 0.9,
               ease: Back.easeOut,
            },
         ],
         delay: '-=1.8',
      };

      TL.to(aboutRef, 0, { css: { visibility: 'visible' } })
         .from(imageRef, ...animation.settings)
         .from(bodyRef, ...animation.settings, animation.delay)
         .from(buttonsRef, ...animation.settings, animation.delay);
      return () => {
         TL.kill();
      };
   }, []);

   const anim = {
      exit: {
         trigger: ({ node }) =>
            TweenLite.to(node, 1.5, {
               opacity: 0,
               y: 50,
               ease: Back.easeIn,
            }),
         length: 1.5,
      },
      entry: {
         trigger: ({ node }) =>
            TweenLite.from(node, 1.5, {
               opacity: 0,
            }),
         delay: 1.5,
      },
   };

   return (
      <section className="about container" ref={el => (aboutRef = el)}>
         <div className="about__sidebar">
            <figure className="about__image" ref={el => (imageRef = el)}>
               <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
            </figure>

            <div className="about__button-area" ref={el => (buttonsRef = el)}>
               <a href="/dsb-resume.pdf" target="_blank" className="button">
                  <FiFileText className="about__button-icon" />
                  View Resume
               </a>

               <a
                  href="https://www.linkedin.com/in/wheredannyends/"
                  target="_blank"
                  className="button button--alt"
               >
                  <FaLinkedinIn className="about__button-icon" />
                  Connect On LinkedIn
               </a>
            </div>
         </div>

         <div className="about__body" ref={el => (bodyRef = el)}>
            <h2>About Me</h2>
            <p>
               Hello there! My name is Danny and I'm from beautiful British
               Columbia, Canada. With a rich tapestry of experiences ranging
               from music and teaching to cooking and technology, my friends
               like to tell me that I've lived multiple lives.
            </p>
            <p>
               My journey began in the vibrant world of music, touring Canada
               twice with a pop-punk band, an experience that taught me the
               power of storytelling and connecting with diverse audiences.
               Following my musical adventures, I embarked on a culturally
               enriching journey to Japan, where I spent four years teaching
               English to students of all ages. This period honed my skills in
               communication and adaptability, deepening my appreciation for
               diverse cultures.
            </p>
            <p>
               Upon returning from Japan, I attended the British Columbia
               Institute of Technology, where I graduated with honours in
               Digital Design & Development, which has been foundational in my
               career. Being elected Class President and receiving the Peter
               Campin Memorial Award were highlights that underscored my
               commitment to academic excellence and leadership.
            </p>
            <p>
               My professional journey in the tech industry began at Convertus,
               where I contributed to developing bespoke WordPress themes for
               Canadian car dealerships. I quickly climbed the ranks, and within
               a year was helping lead a team in creating a WordPress multi-site
               platform for over 1,500 car dealership websites nationwide. This
               experience laid the foundation for my skill set in web
               development, as well as taught me leadership and people
               management skills.
            </p>
            <p>
               I then moved on to Pixel Union, where I honed my skills by
               crafting e-commerce experiences on the Shopify Plus platform. I
               built storefronts for some of Shopify's highest revenue
               merchants, generating $1M+ annually, and took the lead in
               developing and refining internal tools and build processes to
               streamline and optimize our organization's developer experience.
            </p>
            <p>
               Following this, I embraced a new challenge at Clever, working as
               a Senior Frontend Engineer. Here, I delved into the real estate
               domain, developing SaaS products used by thousands of real estate
               professionals across the United States. I architected a component
               library in React and TypeScript, deploying it to projects across
               the organization via NPM, and refactored architecture of Clever's
               website to optimize page speed and core web vitals, lead to
               sustained increases in traffic and revenue.
            </p>
            <p>
               Most recently, at Nomadago, I co-founded and spearheaded the
               development of a social network app, which marked a significant
               chapter in my career. I was instrumental in driving the design,
               development, and launch of an innovative social network
               application tailored for iOS and Android. This venture stood out
               as a platform that rapidly captured the attention and engagement
               of digital nomads worldwide, reflecting not just a technological
               triumph but also a deep understanding of a niche yet growing
               global community.
            </p>
            <p>
               The past four years have seen me truly embrace the life of a
               digital nomad, a lifestyle that has allowed me to blend work and
               travel, immerse myself in rich cultures, and expand my horizons
               globally. This period has been instrumental in my growth, both
               professionally and personally.
            </p>
            <p>
               Parallel to my professional endeavors, I have always harbored a
               passion for cooking. With experience in restaurant kitchens and
               as an avid home cook, I dream of one day combining this love for
               culinary arts with my entrepreneurial spirit in a food truck
               venture.
            </p>
            <p>
               In essence, my journey has been about creating resonating
               experiences, whether through digital solutions, teaching,
               cooking, or music. I am excited about the future and eager to
               forge new connections and explore further horizons.
            </p>
         </div>
      </section>
   );
};

export default App;

