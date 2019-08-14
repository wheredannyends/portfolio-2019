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
                  stack
                  timeline
                  url
                  image {
                     sharp: childImageSharp {
                        fluid {
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
      ({ meta: { slug, title, subtitle, timeline, stack, image }, body }) => ({
         slug,
         title,
         subtitle,
         body,
         image,
         timeline,
         stack: stack.split(','),
      })
   );
};

export default useProjects;
