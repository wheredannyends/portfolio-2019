import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export const query = graphql`
   query($slug: String!) {
      mdx(frontmatter: { slug: { eq: $slug } }) {
         frontmatter {
            title
            subtitle
         }
         body
      }
   }
`;

const ProjectTemplate = ({ data: { mdx: project } }) => {
   return (
      <div className="inner-wrap">
         <h1>{project.frontmatter.title}</h1>
         <MDXRenderer>{project.body}</MDXRenderer>
      </div>
   );
};

export default ProjectTemplate;
