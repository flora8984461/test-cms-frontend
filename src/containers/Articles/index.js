import React from "react";
import Articles from "../../Components/Articles";
import Query from "../../Components/Query";
import ARTICLES_QUERY from "../../queries/articles/articles";

const Home = () => {
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>Flora blog</h1>
          <Query query={ARTICLES_QUERY}>
            {({ data: { newContentTypes } }) => {
              return <Articles articles={newContentTypes} />;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default Home;
