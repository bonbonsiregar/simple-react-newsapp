import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
    const [data, setData] = useState()
    const api = "4b979267d4104504ac4c7c18735b44f3"

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=${api}`)
        .then((response) => setData(response.data))
        .catch((error) => console.log(error));
    }, []);


    return(
        <NewsContext.Provider value={{data}}>
            {props.children}
        </NewsContext.Provider>
    );
};

export default NewsContext;