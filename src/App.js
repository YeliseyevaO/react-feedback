
import { Component } from 'react';
import './App.css';
import Statistics from './components/statistics';
import FeedbackOptions from './components/feedbackOptions';
import Section from './components/section';
import Container from './components/container';
import Notification from './components/notification/Notification';
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
    const { good, neutral, bad } = this.state;
    const sum = good + neutral + bad;
    if (sum) {
      return Math.round(good * 100 / sum);
    }
  }

  render() {
    const { good, neutral, bad } = this.state;

  return(
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={this.state} onLeaveFeedback={this.handlClick} />
      </Section>
      <Section title="Statistics">
        <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage} />
          <Notification options={this.state} message="No feedback given" />
    </Section>
    </Container>
  );
  }
}

export default App;
