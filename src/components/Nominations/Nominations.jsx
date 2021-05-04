import React from 'react'

function Nominations({ nominations, setNominations }) {
  
  const handleRemoveNomination = (movieID) => {
    let filteredNominations = nominations.filter(movie => movie.imdbID!==movieID)
    setNominations([filteredNominations]);
  }


  if(nominations.length!==0){
    return (
      <section>
        <ul>
          {
            nominations.map(movie => {
              return (
                <li key={movie.imdbID}>
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
