exports.createPages = async ({ actions, graphql, reporter }) => {
   const result = await graphql(`
      {
         allMdx {
            nodes {
               frontmatter {
                  slug
               }
            }
         }
      }
   `);

   if (result.errors) {
      reporter.panic('Failed to create project pages', result.errors);
   }

   const pages = result.data.allMdx.nodes;

   pages.forEach(page => {
      actions.createPage({
         path: `work/${page.frontmatter.slug}`,
         component: require.resolve('./src/templates/project-details.js'),
         context: {
            slug: page.frontmatter.slug,
         },
      });
   });
};
