import feedback from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, increment }) => {
  return (
    <>
      <div className={feedback.feedbackBlock}>
        {options.map(option => {
          return (
            <button
              type="button"
              onClick={() => increment(option)}
              key={option}
              className={feedback.btn}
            >
              {option}
            </button>
          );
        })}
      </div>
    </>
  );
};
