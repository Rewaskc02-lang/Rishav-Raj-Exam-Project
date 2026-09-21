// import React from 'react'
import useState from 'react'
import './App.css'
import Course from './components/Course.jsx'
import courses from './data/courses.jsx'
import Button from './components/Button.jsx'
import AddButton from './components/AddButton.jsx'

function App() {


  return (
    <>
    <Button/>
    <div id='title'>
    {courses.map((topic) => {
     return( 
      <div> 
        <Course/>
        <p><strong>Title:</strong> {topic.title}</p>
        <p><strong>Instructor:</strong> {topic.instructor}</p>
        <p><strong>Duration:</strong> {topic.duration}</p>
        <p><strong>Your Progess:</strong>{topic.progress ? "Not Started" : "In progress"} </p>
        <AddButton/>
      </div>
     )
    })}

    <Course/>
    </div>
</>
)
}

export default App