import styles from "./Certifications.module.css";
import { CertificateCard } from "./CertificateCard";
import { useMemo } from "react";

export const Certifications = () => {
  const certificates = useMemo(() => [
      {
        title: "Google Cloud Fundamentals",
        pdfPath: `${import.meta.env.BASE_URL}certificates/google_cloud.pdf`,
        urlPath: "https://www.coursera.org/account/accomplishments/certificate/FJBL7GSM5R4U",
      },
      {
        title: "Python Data Structures",
        pdfPath: `${import.meta.env.BASE_URL}certificates/python_data_structures.pdf`,
        urlPath: "https://www.coursera.org/account/accomplishments/certificate/LNC6LK7H73L8",
      },
    ], []);

  return (
    <section id="certifications" className={styles.certificationsSection}>
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.certificatesGrid}>
        {certificates.map((cert, index) => (
          <CertificateCard
            key={index}
            title={cert.title}
            pdfPath={cert.pdfPath}
            urlPath={cert.urlPath}
          />
        ))}
      </div>
    </section>
  );
};