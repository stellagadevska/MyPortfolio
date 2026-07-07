import { skills } from "@/data/about";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={`${styles.skills} padd-15`}>
      <div className='row'>
        {skills.map((skill) => (
          <div className={`${styles.skillItem} padd-15`} key={skill.name}>
            <h5>{skill.name}</h5>
            <div className={styles.progress}>
              <div
                className={styles.progressIn}
                style={{ width: `${skill.level}%` }}
              ></div>
              <div className={styles.skillPercent}>{skill.level}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
