import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CharactersPage from './pages/CharactersPage/CharactersPage';
import CharactersDetailPage from './pages/CharactersDetailPage/CharactersDetailPage';
import LocationsPage from './pages/LocationsPage/LocationsPage';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import ProfileContext from './contexts/ProfileContext';
import { useState } from 'react';
import './App.css';

const profileDefault = {

  "name": "Rick Sanchez",
  
  "status": "Alive",
  
  "species": "Human",
  
  "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  
  }

function App() {

  const [profile, setProfile] = useState(profileDefault);
  return (
    
   <div className="App">
   <ProfileContext.Provider value={{profile, setProfile}}>

   <BrowserRouter>
   <Header />
      <Routes>
        <Route path="/">
          <Route path="/" element={<HomePage />} /> {/* podrias poner index en vez de path="/" */}
          <Route path="characters" element={<CharactersPage />} />
          <Route path="locations" element={<LocationsPage />} />
          <Route path="characters/:idCharacter" element={<CharactersDetailPage />} />
        </Route>
      </Routes>

    </BrowserRouter>
    </ProfileContext.Provider>
    </div>
  );
}

export default App;
