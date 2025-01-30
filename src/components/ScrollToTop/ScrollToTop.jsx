import { useState, useEffect } from 'react';
import styles from './ScrollToTop.module.css';
import upArrow from '/Users/sainithin/Desktop/projects/my-portfolio/src/assets/up-arrow.png';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 300);
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className={`${styles.scrollToTop} ${isVisible ? styles.show : ''}`}
        aria-label="Scroll to top"
      >
        <img src={upArrow} alt="Scroll to top" className={styles.scrollIcon} />
      </button>
    )
  );
};

export default ScrollToTop;