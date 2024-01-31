import { graphql, useStaticQuery } from 'gatsby';

const useProjects = () => {
   const data = useStaticQuery(graphql`
      {
         projects: allMdx {
            entries: nodes {
               parent {
                  ... on File {
                     name
                  }
               }
               meta: frontmatter {
                  slug
                  title
                  image {
                     childImageSharp {
                        gatsbyImageData(
                           width: 800
                           quality: 100
                           layout: CONSTRAINED
                        )
                     }
                  }
                  subtitle
                  role
                  stack
                  timeline
                  url
               }
               body
            }
         }
      }
   `);

   return data.projects.entries
      .sort((a, b) => (a.parent.name < b.parent.name ? -1 : 1))
      .map(
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

