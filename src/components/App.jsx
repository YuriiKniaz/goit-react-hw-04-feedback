import appCss from './App.module.css';

import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { useState } from 'react';
export const App = () => {
  const [feedbacks, setFeedbacks] = useState({ good: 0, neutral: 0, bad: 0 });
  const { good, neutral, bad } = feedbacks;
  const increment = value => {
    setFeedbacks(prevfeedback => ({
      ...prevfeedback,
      [value]: prevfeedback[value] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <div className={appCss.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedbacks)}
          increment={increment}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            netural={neutral}
            bad={bad}
            total={countTotalFeedback()}
            percentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification text="No feedback given" />
        )}
      </Section>
    </div>
  );
};
