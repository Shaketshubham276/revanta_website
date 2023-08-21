import React from 'react'
import './navbar.css'
const navbar = () => {
  return (
    <div>
      <div className="navbar">
  <div className="list">
    <ul>
      <img
        className="image"
        src="./326480590_1591450784610208_3385628294328587499_n.jpg"
        alt="image" />
      <li>home</li>
      <li>about</li>
      <li>content</li>
      <li> database</li>
      <li>achievements</li>
      <li>discovery</li>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search the website"
          className="search-box"
        />
      </div>
    </ul>
  </div>
</div>

    </div>
  )
}

export default navbar
