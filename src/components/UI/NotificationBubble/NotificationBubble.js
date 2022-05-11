import { useEffect, useState } from "react";
import styles from "./NotificatonBubble.module.css";

const NotificationBubble = (props) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    if (props.count === 0) {
      return;
    }
    setIsHighlighted(true);

    const timer = setTimeout(() => {
      setIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [props.count]);

  const classNames = `${styles.bubble} ${isHighlighted ? styles.bump : ""}`;
  return <div className={classNames}>{props.count}</div>;
};

export default NotificationBubble;
