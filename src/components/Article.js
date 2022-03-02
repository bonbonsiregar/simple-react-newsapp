import React from "react";

function Article({ data }) {
  return (
    <div className="news">
      <h1 className="news__title">{data.title}</h1>
      <p className="news__desc">{data.description}</p>
      <span className="news__author">{data.author}</span> <br />
      <span className="news__published">{data.publishedAt}</span>
      <span className="news__source">{data.source.name}</span> <br />
      <a className="news__url" href={data.url}>Link</a>
    </div>
  );
}

export default Article;