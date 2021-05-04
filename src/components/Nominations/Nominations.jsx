import React from 'react'

function Nominations({ nominations, setNominations }) {
  
  const handleRemoveNomination = (movieID) => {
    console.log(movieID)
    // let movie = { imdbID, Title, Year, Poster };
    // setNominations([...nominations, movie]);
  }

  if(nominations){
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
