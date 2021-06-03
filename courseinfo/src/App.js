import React from 'react'
import './App.css';

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course.name}/>
      <Content course={course}/>
      <Total parts={course.parts}/>
    </div>
  )
}

const Header = ({ name }) => {
  return (
      <h1>{name}</h1>
  )
}

const Content = ({ course }) => {
  return (
    <div>
      <Part part={course.parts[0]}/>
      <Part part={course.parts[1]}/>
      <Part part={course.parts[2]}/>
    </div>
  )
}

const Total = ({ parts }) => {
  const suma = parts[0].exercises + parts[1].exercises + parts[2].exercises 
  return (
    <p><strong>total of {suma} exercises</strong></p>
  )
}

const Part = ({ part }) => {
  return (
    <>
      <p>{part.name}</p>
      <p>{part.exercises}</p>
    </>
  )
} 

export default App;
