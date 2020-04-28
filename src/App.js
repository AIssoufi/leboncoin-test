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
          <PropertyList
            properties={[
              {
                title: 'test1',
                imgUrl: 'https://www.leboncoin.fr/_next/static/vacances-64e946b5.jpg',
                propertyUrl: 'https://www.leboncoin.fr/locations_gites/offres/'
              },
              {
                title: 'test2',
                imgUrl: 'https://www.leboncoin.fr/_next/static/vacances-64e946b5.jpg',
                propertyUrl: 'https://www.leboncoin.fr/locations_gites/offres/'
              },
              {
                title: 'test3',
                imgUrl: 'https://www.leboncoin.fr/_next/static/vacances-64e946b5.jpg',
                propertyUrl: 'https://www.leboncoin.fr/locations_gites/offres/'
              },
              {
                title: 'test4',
                imgUrl: 'https://www.leboncoin.fr/_next/static/vacances-64e946b5.jpg',
                propertyUrl: 'https://www.leboncoin.fr/locations_gites/offres/'
              }
            ]}
            isLoading={false}
          />
        </div>
      </main>
      <aside>
        <SearchMenu />
      </aside>
    </div>
  );
}

export default App;
