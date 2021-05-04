import React, { useEffect, useState } from 'react';
import Axios from 'axios';

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
      .get(`${baseURL}&s=${searchTerm}&type=movie&page=${resultsPageNum}`)
      .then((res) => {
        setResults(res.data);
      })
      .catch(err => console.log(err))
    }
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            name="search"
            id="search"
            onChange={handleInputChange}
            value={searchTerm}
            placeholder="Search movies"
          />
        </div>
        <div>
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  )
}

export default Search
