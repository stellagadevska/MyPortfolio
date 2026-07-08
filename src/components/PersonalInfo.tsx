import { personalInfo } from "@/data/about";
import { profile } from "@/data/site";
import styles from "./PersonalInfo.module.css";

const PersonalInfo = () => {
  return (
    <div className={`${styles.personalInfo} padd-15`}>
      <div className='row'>
        {personalInfo.map((item) => (
          <div className={`${styles.infoItem} padd-15`} key={item.label}>
            <p>
              {item.label} <span>{item.value}</span>
            </p>
          </div>
        ))}
      </div>

      <div className='row'>
        <div className={`${styles.buttons} padd-15`}>
          <a href='/myRes.pdf' className='btn' download>
            Download CV
          </a>

          <a
            href={profile.linkedInUrl}
            className='btn'
            target='_blank'
            rel='noreferrer'
            aria-label='Hire me — contact on LinkedIn (opens in a new tab)'
          >
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
