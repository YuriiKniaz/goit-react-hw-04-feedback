import { Component } from 'react';
import appCss from './App.module.css';

import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increment = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    return (
      <div className={appCss.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} increment={this.increment} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              netural={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              percentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification text="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}
