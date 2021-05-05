import React from 'react';
import {v4 as uuid} from 'uuid';
import './SearchResults.scss';

function SearchResults({ results, maxNominations, nominations, setNominations, resultsPageNum, setResultsPageNum }) {

  let isButtonDisabled = (!(nominations.length<maxNominations));

  const handleNominate = (imdbID, Title, Year, Poster) => {
    let movie = { imdbID, Title, Year, Poster };
    setNominations([...nominations, movie]);
  }

  if(results.Search){
    return (
      <section className="results">
        <div className="results__block container">
          <h3 className="results__block-heading">{results.totalResults} movies found</h3>
          <div className="results__block-page">
            <button className="results__block-page-button results__block-page-button--prev">Prev</button>
            <div className="results__block-page-numbers">Page {resultsPageNum} of {Math.floor(results.totalResults/10)+1}</div>
            <button className="results__block-page-button results__block-page-button--next">Next</button>
          </div>
          <ul className="results__block-list">
            {
              results.Search.map(movie => {
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
                        disabled={isButtonDisabled}
                      >
                        Nominate
                      </button>
                    </div>
                  </li>
                )
              })
            }
          </ul>
          <div className="results__block-page">
            <button className="results__block-page-button results__block-page-button--prev">Prev</button>
            <div className="results__block-page-numbers">Page {resultsPageNum} of {Math.floor(results.totalResults/10)+1}</div>
            <button className="results__block-page-button results__block-page-button--next">Next</button>
          </div>
        </div>
      </section>
    )
  } else return (<></>)
}

export default SearchResults
