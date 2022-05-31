import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";

const Homepage = () => {
  let [input, setInput] = useState("");
  let [data, setData] = useState(null);
  let [page, setPage] = useState(1);
  let [currentSreach, setcurrentSreach] = useState("");
  const auth = "563492ad6f917000010000018e86995e10f54ae5a9add270c0dc5e98";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const searchURL = `https://api.pexels.com/v1/search?query=${currentSreach}&page=1&per_page=15`;

  //fetch data from pexels api
  const search = async (url) => {
    setPage(2);
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parsedData = await dataFetch.json();
    console.log(parsedData);
    setData(parsedData.photos);
  };

  // load more pictures
  const morepicture = async () => {
    let newURL;
    if (input === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${input}&page=${page}&per_page=15`;
    }
    setPage(page + 1);
    const dataFetch = await fetch(newURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parsedData = await dataFetch.json();
    console.log(parsedData);
    setData(data.concat(parsedData.photos));
  };

  // fetch data when the web loads
  useEffect(() => {
    search(initialURL);
  }, []);

  useEffect(() => {
    if (currentSreach === "") {
      search(initialURL);
    } else {
      search(searchURL);
    }
  }, [currentSreach]);

  return (
    <div style={{ minHeight: "100vh" }}>
      <h1 className="title">This is homepage.</h1>
      <Search
        search={() => {
          setcurrentSreach(input);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
      <div className="loadmore">
        <button onClick={morepicture}>Load More</button>
      </div>
    </div>
  );
};

export default Homepage;
