import stat from './Statistics.module.css';

export const Statistics = ({ good, netural, bad, total, percentage }) => {
  return (
    <ul className={stat.statList}>
      <li className={stat.statListItem}>Good: {good}</li>
      <li className={stat.statListItem}>Netural: {netural}</li>
      <li className={stat.statListItem}>Bad: {bad}</li>
      <li className={stat.statListItem}>Total: {total}</li>
      <li className={stat.statListItem}>
        Positive feedback: {percentage ? percentage : 0}%
      </li>
    </ul>
  );
};
