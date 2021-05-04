import './App.scss';
import { useState } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import SearchResults from './components/SearchResults/SearchResults';
import Nominations from './components/Nominations/Nominations';

const baseURL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}`;

function App() {

  const maxNominations = 5;
  const [ results, setResults ] = useState('');
  const [ nominations, setNominations ] = useState('');
  const [ resultsPageNum, setResultsPageNum ] = useState(1);

  console.log(results.Search);
  
  return (
    <>
      <Header />
      <Search 
        setResults={ setResults }
        baseURL={ baseURL }
        resultsPageNum={ resultsPageNum }
      />
      <SearchResults
        results={ results }
        maxNominations={ maxNominations }
        nominations={ nominations }
        setNominations={ setNominations }
        setResultsPageNum={ setResultsPageNum }
      />
      <Nominations
        nominations={ nominations }
        setNominations={ setNominations }
      />
    </>
  );
}

export default App;
