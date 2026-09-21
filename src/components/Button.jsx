import React from 'react'
import courses from '../data/courses'

function Button() {
  return (
    <div>
        <p><strong>Number of Courses:</strong>{courses.length}</p>
    </div>
  )
}

export default Button