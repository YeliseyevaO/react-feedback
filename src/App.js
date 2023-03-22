
import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  handlClick = (event) => {
    const { name } = event.target;
  this.setState(prevState =>({
    

    [name]: prevState[name] + 1 
  }));
  }

  countTotalFeedback=()=>{
     const oneState = Object.values(this.state);
    return oneState.reduce((total, value) => total + value, 0);

    
  }
  countPositiveFeedbackPercentage = () => {
    
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback;

  return(
    <div className="App">
      <h1>Please leave feedback</h1>
      <button type="button" name='good' onClick={this.handlClick}>Good</button>
      <button type="button" name='neutral' onClick={this.handlClick}>Neutral</button>
      <button type="button" name='bad' onClick={this.handlClick}>Bad</button>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: </p>
    </div>
  );
  }
}

export default App;
