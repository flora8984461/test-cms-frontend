import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query newContentTypes {
    newContentTypes {
      id
      title
      category {
        id
        name
      }
      image {
        url
      }
    }
  }
`;

export default ARTICLES_QUERY;