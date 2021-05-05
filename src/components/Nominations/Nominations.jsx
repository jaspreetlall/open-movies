import React from 'react';
import {v4 as uuid} from 'uuid';

function Nominations({ nominations, setNominations }) {
  
  const handleRemoveNomination = (movieID) => {
    setNominations(nominations.filter(movie => movie.imdbID!==movieID));
  }


  if(nominations.length!==0){
    return (
      <section>
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
  } else return (<></>)
}

export default Nominations
