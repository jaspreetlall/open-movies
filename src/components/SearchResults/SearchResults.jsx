import React from 'react';
import {v4 as uuid} from 'uuid';

function SearchResults({ results, maxNominations, nominations, setNominations, setPageNum }) {

  let isButtonDisabled = (!(nominations.length<maxNominations));

  const handleNominate = (imdbID, Title, Year, Poster) => {
    let movie = { imdbID, Title, Year, Poster };
    setNominations([...nominations, movie]);
  }

  if(results.Search){
    return (
      <section>
        <ul>
          {
            results.Search.map(movie => {
              return (
                <li key={uuid()}>
                  <div>
                    <img src={movie.Poster} alt=""/>
                  </div>
                  <div>
                    <h3>{movie.Title}</h3>
                    <p>Year: {movie.Year}</p>
                    <button
                      onClick={() => handleNominate(movie.imdbID, movie.Title, movie.Year, movie.Poster)}
                      disabled={isButtonDisabled}
                    >
                      Nominate!
                    </button>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </section>
    )
  } else return (<></>)
}

export default SearchResults
