import { graphql, useStaticQuery } from 'gatsby';

const useProjects = () => {
   const data = useStaticQuery(graphql`
      {
         projects: allMdx(sort: { fields: fileAbsolutePath }) {
            entries: nodes {
               meta: frontmatter {
                  slug
                  title
                  subtitle
                  role
                  stack
                  timeline
                  url
                  image {
                     sharp: childImageSharp {
                        fluid(maxWidth: 500, quality: 100) {
                           ...GatsbyImageSharpFluid
                        }
                     }
                  }
               }
               body
            }
         }
      }
   `);

   return data.projects.entries.map(
      ({
         meta: { slug, title, subtitle, role, timeline, stack, image, url },
         body,
      }) => ({
         slug,
         title,
         subtitle,
         role,
         body,
         image,
         timeline,
         stack: stack.split(','),
         url,
      })
   );
};

export default useProjects;
