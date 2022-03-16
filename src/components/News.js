import React, {useContext} from "react";
import NewsContext from "../NewsContext";
import Article from "../components/Article";
import Loading from "./Loading";

function News(props) {
    const { data } = useContext(NewsContext);
    //console.log(data);
  
    return (
      <div>
        <h1 className="head__text font-sans text-4xl m-3">News App</h1>
        <div className="all__news">
          {data
            ? data.articles.map((news) => (
                <Article data={news} key={news.url} />
              ))
            : <Loading/> }
        </div>
      </div>
    );
  }
  
  export default News;