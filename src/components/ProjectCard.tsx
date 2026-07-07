import Image from "next/image";
import type { Project } from "@/data/projects";
import styles from "./Projects.module.css";

const ProjectCard = ({ category, image, heading }: Project) => {
  return (
    <div className={`${styles.projectsItem} padd-15`} data-category={category}>
      <div className={`${styles.projectsItemInner} shadow-dark`}>
        <div className={styles.projectsImg}>
          {/* The grid is 3 cols on desktop, 2 on tablet, 1 on mobile — tell
              next/image so it serves an appropriately small variant. */}
          <Image
            src={image}
            alt={heading}
            placeholder='blur'
            sizes='(max-width: 575px) 100vw, (max-width: 991px) 50vw, 33vw'
          />
        </div>

        <div className={styles.projectsInfo}>
          <h4>{heading}</h4>
          <div className={styles.icon}>
            <i className='fa fa-search'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
