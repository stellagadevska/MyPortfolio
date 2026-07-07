import Education from "@/components/Education";
import PersonalInfo from "@/components/PersonalInfo";
import Skills from "@/components/Skills";
import { profile } from "@/data/site";
import { aboutIntro as intro } from "@/data/about";
import styles from "./About.module.css";

export default function AboutPage() {
  return (
    <section className='about active section' id='about'>
      <div className='container'>
        <div className='row'>
          <div className='section-title padd-15'>
            <h2>About Me</h2>
          </div>
        </div>

        <div className='row'>
          <div className={`${styles.aboutContent} padd-15`}>
            <div className='row'>
              <div className={`${styles.aboutText} padd-15`}>
                <h3>
                  I am {profile.name} and I am a{" "}
                  <span>{profile.profession}</span>
                </h3>
                {/* Bio is authored as one string with blank lines between
                    paragraphs; split on those blank lines so each renders as
                    its own <p> (JSX would otherwise collapse the line breaks). */}
                {intro.bio.split(/\n\s*\n/).map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph.trim()}</p>
                ))}
              </div>
            </div>

            <div className='row'>
              <PersonalInfo />
              <Skills />
            </div>

            <Education />
          </div>
        </div>
      </div>
    </section>
  );
}
