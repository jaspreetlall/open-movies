import React, { useEffect, useState } from 'react';
import './Search.scss';
import Axios from 'axios';
import SearchIcon from '../../assets/icons/search.svg';

function Search({ setResults, baseURL, resultsPageNum, setResultsPageNum }) {

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
    setResultsPageNum(1);
    setSearchTerm(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setResultsPageNum(1);
    if (searchTerm !== '') {
      Axios
      .get(`${baseURL}&s=${searchTerm}&type=movie&page=${resultsPageNum}`)
      .then((res) => {
        setResults(res.data);
      })
      .catch(err => console.log(err))
    }
  }

  return (
    <section className="search">
      <div className="search__block container">
        <div className="search__block-hero">
          <h1 className="search__block-hero-title">Shoppies</h1>
          <h2 className="search__block-hero-slogan">Movie awards for entrepreneurs</h2>
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
