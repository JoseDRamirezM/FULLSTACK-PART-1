import React, { useState } from 'react'

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [votes, setVotes] = useState( new Array(anecdotes.length).fill(0))
 
  const [selected, setSelected] = useState(0)

  const random = () => setSelected(Math.floor(Math.random() * anecdotes.length))

  const vote = () => {
    const copyVotes = [...votes]
    copyVotes[selected] += 1
    setVotes(copyVotes)
  }

  const title1 = 'Anecdote of the day'

  const title2 = 'Anecdote with most votes'

  const maxVotes = () => Math.max(...votes)

  const isAllZero = votes.every(vote => vote === 0)
  
  return (
    <div>
      <Display text={title1}/>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={random} text={'next anecdote'} />
      <Button handleClick={vote} text={'vote'} />

      
      <Display text={title2}/>
      
      <MostVotesDisplay mostVotedAnecdote={anecdotes[votes.indexOf(maxVotes())]}
                        maxVotes={maxVotes()} isAllZero={isAllZero} />
      
    </div>
  )
}

const Display = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const MostVotesDisplay = ({ mostVotedAnecdote, maxVotes, isAllZero }) => {
  if (isAllZero) {
    return (
      <> 
        <p>No votes yet!</p>
      </>
    )
  }
  return (
    <>
      <p>{mostVotedAnecdote}</p>
      <p>has {maxVotes} votes</p>
    </>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

export default App;
