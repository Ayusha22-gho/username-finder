import React from 'react'

export default function index({handleUsernameChange,userName,handleSubmit}) {
  return (
    <div>
       <input
        type="text"
        placeholder="Enter username"
        value={userName}
        onChange={handleUsernameChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  )
}