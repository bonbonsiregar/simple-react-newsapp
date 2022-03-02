import React, {useContext} from "react";
import NewsContext from "../NewsContext";
import Article from "../components/Article";

function News(props) {
    const { data } = useContext(NewsContext);
    console.log(data);
  
    return (
      <div>
        <h1 className="head__text" className="font-sans text-4xl m-3">News App</h1>
        <div className="all__news">
          {data
            ? data.articles.map((news) => (
                <Article data={news} key={news.url} />
              ))
            : "No Data"}
        </div>
      </div>
    );
  }
  
  export default News;