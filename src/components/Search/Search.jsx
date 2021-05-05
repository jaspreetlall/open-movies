import React, { useEffect, useState } from 'react';
import './Search.scss';
import Axios from 'axios';
import SearchIcon from '../../assets/icons/search.svg'

function Search({ setResults, baseURL, resultsPageNum }) {

  const [ searchTerm, setSearchTerm ] = useState('');

  useEffect(() => {
    if (searchTerm !== '') {
      Axios
      .get(`${baseURL}&s=${searchTerm}&type=movie&page=${resultsPageNum}`)
      .then((res) => {
        setResults(res.data);
      })
      .catch(err => console.log(err))
    }
  }, [searchTerm, baseURL, resultsPageNum, setResults])

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (searchTerm !== '') {
      Axios
      .get(`${baseURL}&t=${searchTerm}&type=movie&page=${resultsPageNum}`)
      .then((res) => {
        setResults(res.data);
      })
      .catch(err => console.log(err))
    }
  }

  return (
    <section className="search">
      <div className="search__block container">
        <div className="search__block-headings">
          <h1 className="search__block-headings-title">Shoppies</h1>
          <h2 className="search__block-headings-slogan">Movie awards for entrepreneurs</h2>
        </div>
        <form className="search__block-form" onSubmit={submitHandler}>
          <input
            className="search__block-form-input"
            type="text"
            name="search"
            id="search"
            onChange={handleInputChange}
            value={searchTerm}
            placeholder="Search movies"
          />
          <button className="search__block-form-button" type="submit">
            <img className="search__block-form-button-icon" src={SearchIcon} alt="Search"/>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Search
