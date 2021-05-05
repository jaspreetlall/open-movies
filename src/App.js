import './App.scss';
import { useState } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import SearchResults from './components/SearchResults/SearchResults';
import Nominations from './components/Nominations/Nominations';
import NotificationModal from './components/NotificationModal/NotificationModal';

const baseURL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}`;

function App() {

  const maxNominations = 5;
  const [ results, setResults ] = useState('');
  const [ nominations, setNominations ] = useState('');
  const [ nominationsVisibility, setNominationsVisibility ] = useState(false);
  const [ resultsPageNum, setResultsPageNum ] = useState(1);
  const [ needNotification, setNeedNotification ] = useState(true);

  let notificationVisibility = nominations.length===5 && needNotification;
  
  return (
    <>
      <Header
        maxNominations={ maxNominations }
        nominations={ nominations }
        nominationsVisibility={ nominationsVisibility }
        setNominationsVisibility={ setNominationsVisibility }
      />
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
        resultsPageNum={ resultsPageNum }
        setResultsPageNum={ setResultsPageNum }
      />
      <Nominations
        nominations={ nominations }
        setNominations={ setNominations }
        nominationsVisibility={ nominationsVisibility }
      />
      <NotificationModal
        notificationVisibility={ notificationVisibility }
        setNeedNotification={ setNeedNotification }
      />
    </>
  );
}

export default App;
