import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.table(movie);
  //"https://image.tmdb.org/t/p/original/" + movie.backdrop_path
  // const image_url =
  //   "https://image.tmdb.org/t/p/original/" + movie.backdrop_path;

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage:
          'url("https://image.tmdb.org/t/p/original/xGexTKCJDkl12dTW4YCBDXWb1AD.jpg")',
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">Mylist</button>
        </div>
        <h1 className="banner_description">{movie?.overview}</h1>
        {/* descriptions */}
      </div>
      <div className="banner--fadebottom"></div>
    </header>
  );
}

export default Banner;
