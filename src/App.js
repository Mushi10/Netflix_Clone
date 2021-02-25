import React from "react";
import "./App.css";
import Nav from './Nav';
import Row  from './Row';
import requests from "./requests";
import Banner from './Banner';







function App() {
  return (
    <div className="app">
     
     
<Nav/>

<Banner />
 <Row/> 
 <Row title="NETLIX ORIGINALS" 
 fetchUrl={requests.fetchNetflixOriginals} 
 isLargeRow={true} 
 />
 <Row title="Trending Now" 
 fetchUrl={requests.fetchTrending} 
 />
 <Row title="TopRated" 
 fetchUrl={requests.fetchTopRated} 
 />
 <Row title="ComedyMovies" 
 fetchUrl={requests.fetchComedyMovies} 
 />
 <Row title="HorrorMovies" 
 fetchUrl={requests.fetchHorrorMovies} 
 />
 <Row title="RomanceMovies" 
 fetchUrl={requests.fetchRomanceMovies} 
 />
 <Row title="Documentaries"fetchUrl={requests.fetchDocumentaries} 
/> 
  
 
        </div>
      );
    }
    
  
  
export default App;
