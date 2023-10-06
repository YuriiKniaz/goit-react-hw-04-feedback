import ntf from './Notification.module.css';

export const Notification = ({ text }) => {
  return <span className={ntf.text}>{text}</span>;
};
