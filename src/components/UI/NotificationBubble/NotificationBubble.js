import styles from "./NotificatonBubble.module.css"

const NotificationBubble = (props) => {
  return <div className={styles.bubble}>{props.count}</div>;
};

export default NotificationBubble;
