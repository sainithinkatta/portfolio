import styles from "./Profile.module.css";
import { getImageUrl } from "../../utils";
import profileData from '../../data/profile.json';

export const Profile = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{profileData.name}</h1>
        <p className={styles.description}>
          {profileData.description}
        </p>
        
        <a 
          href={profileData.resumeUrl}
          target="_blank" 
          className={styles.contactBtn}
        >
          Resume
        </a>
      </div>

      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Profile image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
