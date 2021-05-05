import React from 'react';
import {v4 as uuid} from 'uuid';
import './Nominations.scss';
import DeleteIcon from '../../assets/icons/delete.svg';

function Nominations({ nominations, setNominations, nominationsVisibility }) {
  
  const handleRemoveNomination = (movieID) => {
    setNominations(nominations.filter(movie => movie.imdbID!==movieID));
  }

  const isNominationsVisible = nominationsVisibility ? "nominations nominations--visible" : "nominations--hidden";

  if(nominations.length!==0){
    return (
      <section className={isNominationsVisible}>
        <div className="nominations__block">
          <h3 className="nominations__block-title">Your Nominations</h3>
          <ul className="nominations__block-list">
            {
              nominations.map(movie => {
                return (
                  <li className="nominations__block-list-item" key={uuid()}>
                    <div className="nominations__block-list-item-poster">
                      <img className="nominations__block-list-item-poster-img" src={movie.Poster} alt=""/>
                    </div>
                    <div className="nominations__block-list-item-desc">
                      <h3 className="nominations__block-list-item-desc-title">{movie.Title}</h3>
                      <p className="nominations__block-list-item-desc-year">{movie.Year}</p>
                      <button
                        className="nominations__block-list-item-desc-button"
                        onClick={() => handleRemoveNomination(movie.imdbID)}>
                        <img
                          className="nominations__block-list-item-desc-button-icon"
                          src={DeleteIcon}
                          alt="Remove"/>
                      </button>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </section>
    )
  } else return (
    <section className={isNominationsVisible}>
      <div className="nominations__block">
        <h3 className="nominations__block-title">Nominate some movies to see them here!</h3>
      </div>
    </section>
  )
}

export default Nominations
