import React, { useState } from 'react'


const App = () => {
  
  //Titles
  const gfb = 'give feedback'
  const stats = 'statistics'

  // Var hooks
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  //Event handlers
  const goodFeedback = () => {
    setGood(good + 1)
    getAverage()
    getPositive()
  }
  const neutralFeedback = () => {
    setNeutral(neutral + 1)
    getAverage()
    getPositive()
  }
  const badFeedback = () => {
    setBad(bad + 1)
    getAverage()
    getPositive()
  }

  const total = good + bad + neutral
  
  const getPositive = () => total === 0 ? 0 : (good / total) * 100
    
  const getAverage = () =>  total === 0 ? 0 :((good - bad) / total)

  return (
  <>
    <Title text={gfb}/>
    
    <Button handleClick={goodFeedback} feedback={'good'} />
    <Button handleClick={neutralFeedback} feedback={'neutral'} />
    <Button handleClick={badFeedback} feedback={'bad'} />
  
    <Title text={stats}/>

    <Statistics total={total} good={good} neutral={neutral} bad={bad} average={getAverage()} positive={getPositive()} />
  </>
  )
}

const Button = ({handleClick, feedback}) => {
  return (
    <button onClick={handleClick} >
      {feedback}
    </button>
  )
}


const Title = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Statistic = ({text, value}) =>{
  return (
  <>
    <td>{text}</td><td>{value}</td>
  </>
  )
}

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        <h3>no feedback given</h3>
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <tr><Statistic text={'good'} value={props.good} /></tr>
        <tr><Statistic text={'neutral'} value={props.neutral} /></tr>
        <tr><Statistic text={'bad'} value={props.bad} /></tr>
        <tr><Statistic text={'all'} value={props.total} /></tr>
        <tr><Statistic text={'average'} value={props.average} /></tr>
        <tr><Statistic text={'positive'} value={props.positive + '%'} /></tr>
      </tbody>
    </table>
  )
}

export default App;
