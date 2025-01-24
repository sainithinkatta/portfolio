import { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import { getImageUrl } from "../../utils";
import profileData from '../../data/profile.json';

export const Profile = () => {
  const [typedName, setTypedName] = useState("");
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const fullName = profileData.name;
    let currentCharIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentCharIndex < fullName.length) {
        setTypedName(fullName.slice(0, currentCharIndex + 1));
        currentCharIndex += 1;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className={styles.container}>
      <div className={`${styles.imageWrapper} ${isImageLoaded ? styles.loaded : ''}`}>
        <img
          src={getImageUrl("hero/heroImage.png")}
          alt="Profile image of me"
          className={styles.heroImg}
          onLoad={() => setIsImageLoaded(true)}
        />
        <div className={styles.imageGlow} />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          {typedName}<span className={styles.cursor}>|</span>
        </h1>
        <p className={styles.description}>
          {profileData.description}
        </p>

        <div className="social-btns" style={{ display: 'flex', gap: '12px' }}>

          {/* Resume  */}
          <div className={styles.btnWrapper}>
            <a
              href={profileData.resumeUrl}
              target="_blank"
              className={styles.contactBtn}
            >
              Resume
              <svg 
                className={styles.arrow} 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </div>

          {/* LinkedIn */}
          <div className={styles.btnWrapper}>
            <a
              href={profileData.linkedInUrl}
              target="_blank"
              className={styles.contactBtn}
            >
              LinkedIn
              <svg 
                className={styles.arrow} 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </div>

          {/* Github  */}
          <div className={styles.btnWrapper}>
            <a
              href={profileData.githubUrl}
              target="_blank"
              className={styles.contactBtn}
            >
              Github
              <svg 
                className={styles.arrow} 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};