import React from "react";
import "./App.css";
import Row from "./Row";
import requsets from "./requests.js";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />

      <Row
        title="Netflix Originals"
        fetchUrl={requsets.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        isLargeRow
        title="Populer on Netflix"
        fetchUrl={requsets.fetchTrending}
      />
      <Row isLargeRow title="Top Rated" fetchUrl={requsets.fetchTopRated} />
      <Row
        isLargeRow
        title="Popular Action Movies"
        fetchUrl={requsets.fetchActionMovies}
      />
      <Row isLargeRow title="Tv Comedy" fetchUrl={requsets.fetchComedyMovies} />
      <Row
        isLargeRow
        title="Horror Movies"
        fetchUrl={requsets.fetchHorrorMovies}
      />
      <Row
        isLargeRow
        title="Romantic Movies"
        fetchUrl={requsets.fetchRomanticMovies}
      />
      <Row
        isLargeRow
        title="Tv Documentaries"
        fetchUrl={requsets.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
