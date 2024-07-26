import React from 'react'

const Score = ({score,resetScore}) => {
  return (
    <div className='score-board'>
        <h1>your score:</h1>
        <hr />
        <h2>-- {score} --</h2>
        <button onClick={resetScore}>Reset</button>
      
    </div>
  )
}

export default Score
