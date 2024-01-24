import React from 'react'
import "./search.css"
export default function index({handleUsernameChange,userName,handleSubmit}) {
  return (
    <div className='search-container'>
      <div className='search-title'>Github User Finder</div>
       <input
        type="text"
        placeholder="Enter username"
        value={userName}
        onChange={handleUsernameChange}
        className='search-input'
      />
      <button type="submit" onClick={handleSubmit} className='search-submit'>
        Submit
      </button>
    </div>
  )
}
