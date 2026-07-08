import Image from "next/image";
import profilePicture from "@/assets/images/profilePicture.jpg";
import { profile } from "@/data/site";
import styles from "./Home.module.css";

export default function HomePage() {
  return (
    <section className={`${styles.home} section active`} id='home'>
      <div className='container'>
        <div className={styles.intro}>
          <Image
            src={profilePicture}
            alt={profile.name}
            width={200}
            height={200}
            className='shadow-dark'
            placeholder='blur'
            priority
          />
          <h1>{profile.name}</h1>
          <p>{profile.profession}</p>
          <div className={styles.socialLinks}>
            <a
              href={profile.githubUrl}
              target='_blank'
              rel='noreferrer'
              aria-label={`${profile.name} on GitHub (opens in a new tab)`}
            >
              <i className='fa fa-github' aria-hidden='true'></i>
            </a>
            <a
              href={profile.linkedInUrl}
              target='_blank'
              rel='noreferrer'
              aria-label={`${profile.name} on LinkedIn (opens in a new tab)`}
            >
              <i className='fa fa-linkedin' aria-hidden='true'></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
