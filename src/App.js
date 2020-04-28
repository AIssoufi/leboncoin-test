// Dependencies
import React, { useState, useEffect } from 'react';

// Components
import { Maps, PropertyList, SearchMenu } from './components';

// Services
import { SearchService } from './services';

// CSS
import './App.css';

const App = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (critera) => {
    setIsFetching(true);
    SearchService.searchProperties(critera)
      .then((results) => {
        setSearchResults(results);
        setIsFetching(false);
        setHasError(false);
      }).catch(error => {
        console.error(error);
        setHasError(true);
      }).finally(() => {
        setIsFetching(false);
      })
  }

  useEffect(() => {
    handleSearch({
      query: 'renove',
      department: 'cher',
      region: 'Val-de-Loire',
      minPrice: 0,
      maxPrice: 150000
    });
  }, [])

  return (
    <div className="App">
      <main>
        <div className="maps-wrapper">
          <Maps results={searchResults} />
        </div>
        <div className="property-list-wrapper">
          <PropertyList
            properties={searchResults}
            isLoading={isFetching}
            hasError={hasError}
          />
        </div>
      </main>
      <aside>
        <SearchMenu onSearch={handleSearch} />
      </aside>
    </div>
  );
}

export default App;
