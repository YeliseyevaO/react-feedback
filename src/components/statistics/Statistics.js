export default function Statistics({good,neutral,bad,total,positivePercentage}) {
  return (
    (good + neutral + bad)>0 && (
      <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total()}</p>
        <p>Positive feedback: {positivePercentage()} %</p>
    </> 
))
}