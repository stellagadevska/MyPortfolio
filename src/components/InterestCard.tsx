import type { Interest } from "@/data/interests";
import styles from "./Interests.module.css";

const InterestCard = ({ name, description, iconClass }: Interest) => {
  return (
    <div className={`${styles.interestsItem} padd-15`}>
      <div className={styles.interestsItemInner}>
        <div className={styles.icon}>
          <i className={iconClass} aria-hidden='true'></i>
        </div>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InterestCard;
