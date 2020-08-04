
import React from "react";
import { useParams } from "react-router";
import Query from "../../Components/Query";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import ARTICLE_QUERY from "../../queries/articles/article";

const Article = () => {
  let { id } = useParams();
  return (
    <Query query={ARTICLE_QUERY} id={id}>
      {({ data: { newContentType } }) => {
        const imageUrl =
          process.env.NODE_ENV !== "development"
            ? newContentType.image[0].url
            : process.env.REACT_APP_BACKEND_URL + newContentType.image[0].url;

        return (
          <div>
            <div
              id="banner"
              className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
              data-src={imageUrl}
              data-srcset={imageUrl}
              data-uk-img
            >
              <h1>{newContentType.title}</h1>
            </div>

            <div className="uk-section">
              <div className="uk-container uk-container-small">
                <ReactMarkdown source={newContentType.content} />
                {(newContentType.image.length > 1) && newContentType.image.filter((img) => newContentType.image.indexOf(img) !== 0).map(function(el) {
                  return (
                    <img 
                      src={process.env.REACT_APP_BACKEND_URL + el.url}
                      alt={process.env.REACT_APP_BACKEND_URL + el.url}
                      height="100"
                    />
                  )
                })}
                <p>
                  <Moment format="MMM Do YYYY">{newContentType.published_at}</Moment>
                </p>
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default Article;