import type { TimelineEntry } from "@/data/about";
import styles from "./Education.module.css";

const TimelineItem = ({ date, title, place, text, iconClass }: TimelineEntry) => {
  return (
    <div className={styles.timelineItem}>
      <div className={styles.circleDot}></div>
      <i className={iconClass} aria-hidden='true'></i> {date}
      <h4 className={styles.timelineTitle}>{title}</h4>
      <h4 className={styles.timelinePlace}>{place}</h4>
      {text && <p className={styles.timelineText}>{text}</p>}
    </div>
  );
};

export default TimelineItem;
