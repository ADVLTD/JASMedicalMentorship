import React from 'react'

export default function Nav() {
    return (
        <div>
            {/* The nave lies over here */}
      <header className="spaceBetween">
        <div className="cookiesDetails flex">
          <p>
            :cookie: This website uses cookies to provide the optimal user experience.{" "}
          </p>
          <a href="#">Learn More</a>
        </div>
        <div className="cookiesAccept">
          <a href="#">Accept</a>
        </div>
      </header>
    </div>
    )
}
