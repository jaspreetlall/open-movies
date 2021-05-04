import './App.scss';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import SearchResults from './components/SearchResults/SearchResults';
import Nominations from './components/Nominations/Nominations';

function App() {
  return (
    <>
      <Header />
      <Search />
      <SearchResults />
      <Nominations />
    </>
  );
}

export default App;
