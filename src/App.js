import React from 'react';
import './App.css';
import { SearchIcon, BellIcon, PersonIcon } from '@primer/octicons-react';
import Popular from './components/Popular';
import Trending from './components/Trending';
import ContinueWatching from './components/ContinueWatching';
import NetflixOriginals from './components/NetflixOriginals';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>NETFLIX</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#tvshows">TV Shows</a>
          <a href="#movies">Movies</a>
          <a href="#added">Recently Added</a>
          <a href="#mylist">My List</a>
        </nav>
        <div className="iconos">
          <a href="#busqueda" className="icon">
            <SearchIcon size={20} title="busqueda" />
          </a>
          <a href="#campana" className="icon">
            <BellIcon size={20} title="campana" />
          </a>
          <a href="#user" className="icon profile-icon">
            <PersonIcon size={24} title="user" />
          </a>
        </div>
      </header>

      <div data-cy='popular-section'>
        <Popular />
      </div>
      <div data-cy='trending-section'>
        <Trending />
      </div>
      <div data-cy='continue-watching-section'>
        <ContinueWatching />
      </div>
      <div data-cy='netflix-originals-section'>
        <NetflixOriginals />
      </div>
    </div>
  );
}
export default App;
