import { certificates, education, work } from "@/data/about";
import TimelineItem from "./TimelineItem";
import styles from "./Education.module.css";

const Education = () => {
  return (
    <div className='row'>
      <div className={`${styles.education} padd-15`}>
        <h3 className={styles.title}>Education</h3>
        <div className='row'>
          <div className={`${styles.timelineBox} padd-15`}>
            <div className={`${styles.timeline} shadow-dark`}>
              {education.map((item) => (
                <TimelineItem key={`${item.date}-${item.title}`} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.certificates} padd-15`}>
        <h3 className={styles.title}>Work</h3>
        <div className={`${styles.timelineBox} padd-15`}>
          <div className={`${styles.timeline} shadow-dark`}>
            {work.map((item) => (
              <TimelineItem key={`${item.date}-${item.title}`} {...item} />
            ))}
          </div>
        </div>

        <h3 className={`${styles.title} ${styles.certificatesMargin}`}>
          Certificates
        </h3>
        <div className={`${styles.timelineBox} padd-15`}>
          <div className={`${styles.timeline} shadow-dark`}>
            {certificates.map((item) => (
              <TimelineItem key={`${item.date}-${item.title}`} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
