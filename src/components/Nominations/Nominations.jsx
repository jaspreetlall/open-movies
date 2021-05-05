import React from 'react';
import {v4 as uuid} from 'uuid';
import './Nominations.scss';

function Nominations({ nominations, setNominations, nominationsVisibility }) {
  
  const handleRemoveNomination = (movieID) => {
    setNominations(nominations.filter(movie => movie.imdbID!==movieID));
  }

  const isNominationsVisible = nominationsVisibility ? "visible" : "hidden";

  if(nominations.length!==0){
    return (
      <section className={isNominationsVisible}>
        <ul>
          {
            nominations.map(movie => {
              return (
                <li key={uuid()}>
                  <div>
                    <img src={movie.Poster} alt=""/>
                  </div>
                  <div>
                    <h3>{movie.Title}</h3>
                    <p>Year: {movie.Year}</p>
                    <button onClick={() => handleRemoveNomination(movie.imdbID)}>Remove!</button>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </section>
    )
  } else return (
    <section className={isNominationsVisible}>
      <h3>Nominate some movies to see them here!</h3>
    </section>
  )
}

export default Nominations
