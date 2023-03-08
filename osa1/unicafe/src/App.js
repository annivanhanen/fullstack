import { useState } from 'react'

const Header = () => <h1>Give feedback</h1>

const Button = ({handleClick, text}) => {
  return(
  <button onClick={handleClick}>{text}</button>
  )
}

const StatisticLine = ({text, value}) => (
      <tr>
        <td>
        {text} 
        </td>
        <td>
        {value}
        </td>
      </tr>
  )


const Stats = ({good, bad, neutral}) => {

  const total = good+neutral+bad

  const average = ((good-bad)/total)

  const positive = (good/total)*100

  if (total === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        No feedback given
      </div>
    )
  }
  return(      
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="Good:" value={good}/>
          <StatisticLine text="Neutral:" value={neutral}/>
          <StatisticLine text="Bad:" value={bad}/>
          <StatisticLine text="All:" value={total}/>
          <StatisticLine text="Average:" value={average}/>
          <StatisticLine text="Positive %:" value={positive}/>
        </tbody>
        </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = newFeedback => {
    console.log('good value now', newFeedback)
    setGood(newFeedback)
  }

  const setToNeutral = newFeedback => {
    console.log('neutral value now', newFeedback)
    setNeutral(newFeedback)
  }

  const setToBad = newFeedback => {
    console.log('bad value now', newFeedback)
    setBad(newFeedback)
  }


  return (
    <div>
      <Header />
      <Button handleClick={() => setToGood(good+1)} text="Good" />
      <Button handleClick={() => setToNeutral(neutral+1)} text="Neutral" />
      <Button handleClick={() => setToBad(bad+1)} text="Bad" />
      <Stats good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App