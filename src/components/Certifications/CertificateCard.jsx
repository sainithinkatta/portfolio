import styles from "./Certifications.module.css";

export const CertificateCard = ({ 
  title, 
  pdfPath, 
  urlPath 
}) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <div className={styles.pdfContainer}>
        <iframe
          src={pdfPath}
          className={styles.pdfViewer}
          title={`${title} Certificate`}
          aria-label={`${title} Certificate PDF Viewer`}
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = `${import.meta.env.BASE_URL}fallback.pdf`;
          }}
        />
      </div>

      <div className={styles.cardFooter}>
        <a 
          href={urlPath} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button className={styles.cardButton}>View</button>
        </a>
      </div>
    </div>
  );
};