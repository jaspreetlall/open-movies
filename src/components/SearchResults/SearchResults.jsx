import React from 'react';
import {v4 as uuid} from 'uuid';
import './SearchResults.scss';

function SearchResults({
  results,
  maxNominations,
  nominations,
  setNominations,
  resultsPageNum,
  setResultsPageNum,
  setNeedNotification
}){

  const handleNominate = (imdbID, Title, Year, Poster) => {
    let movie = { imdbID, Title, Year, Poster };
    setNominations([...nominations, movie]);
    setNeedNotification(true);
  }

  const handleNextPage = () => {
    if ((results.totalResults/10 > 1) && (resultsPageNum < Math.floor(results.totalResults/10))) {
      setResultsPageNum(resultsPageNum+1);
    }
  }

  const handlePrevPage = () => {
    if (resultsPageNum > 1) {
      setResultsPageNum(resultsPageNum-1);
    }
  }

  const Paginator = () => {
    return (
      <div className="results__block-page">
        <button onClick={handlePrevPage} className="results__block-page-button results__block-page-button--prev">Prev</button>
        <div className="results__block-page-numbers">
          Page {resultsPageNum} of { (results.totalResults/10 <1)
            ? Math.floor(results.totalResults/10) + 1
            : Math.floor(results.totalResults/10)
          } 
        </div>
        <button onClick={handleNextPage} className="results__block-page-button results__block-page-button--next">Next</button>
      </div>
    )
  }

  if(results.Search){
    return (
      <section className="results">
        <div className="results__block container">
          <h3 className="results__block-heading">{results.totalResults} movies found</h3>
          {
            (results.totalResults/10 > 1)
            ? <Paginator />
            : (<></>)
          }
          <ul className="results__block-list">
            {
              results.Search.map(movie => {
                let isNominated = Array.isArray(nominations) && nominations.length>0 && (nominations.filter(item => item.imdbID === movie.imdbID).length>0);
                return (
                  <li className="results__block-list-item" key={uuid()}>
                    <div className="results__block-list-item-poster">
                      <img className="results__block-list-item-poster-img" src={movie.Poster} alt=""/>
                    </div>
                    <div className="results__block-list-item-desc">
                      <h3 className="results__block-list-item-desc-title">{movie.Title}</h3>
                      <p className="results__block-list-item-desc-year">Year: {movie.Year}</p>
                      <button
                        className="results__block-list-item-desc-button"
                        onClick={() => handleNominate(movie.imdbID, movie.Title, movie.Year, movie.Poster)}
                        disabled={isNominated || !(nominations.length<maxNominations)}
                      >
                        Nominate
                      </button>
                    </div>
                  </li>
                )
              })
            }
          </ul>
          {
            (results.totalResults/10 > 1)
            ? <Paginator />
            : (<></>)
          }
        </div>
      </section>
    )
  } else return (<></>)
}

export default SearchResults