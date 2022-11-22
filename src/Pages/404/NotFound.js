import Img404 from "../../Assets/404/404-2.svg"
import "./NotFound.css"

import React from 'react'

function NotFound() {
  return (
    <div>
        <embed src={Img404} alt="404 Not Found!" className="notFound__img" />
    </div>
  )
}

export default NotFound