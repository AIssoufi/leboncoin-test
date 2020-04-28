// Dependencies
import React from 'react';

// Components
import { Maps, PropertyList, SearchMenu } from './components';

// CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <div className="maps-wrapper">
          <Maps />
        </div>
        <div className="property-list-wrapper">
          <PropertyList />
        </div>
      </main>
      <aside>
        <SearchMenu />
      </aside>
    </div>
  );
}

export default App;
