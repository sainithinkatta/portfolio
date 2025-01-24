import { useRef } from "react";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";

export default function ContactForm () {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_81xhqw5", // EmailJS service ID
        "template_4pnu1rg", // EmailJS template ID
        formRef.current,
        "V5L8CWtENRXMdKxfu" // EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset(); // Reset the form fields
        },
        () => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return  (
    <form ref={formRef} onSubmit={handleSubmit} className={styles.contactForm}>
        <input
            type="text"
            name="to_name"
            placeholder="Name *"
            className={styles.inputField}
            required
        />
        <input
            type="email"
            name="email_id"
            placeholder="Email *"
            className={styles.inputField}
            required
        />
        <input
            type="text"
            name="subject"
            placeholder="Subject *"
            className={styles.inputField}
            required
        />
        <textarea
            name="message"
            placeholder="Message *"
            className={styles.textareaField}
            required
        ></textarea>
        <button type="submit" className={styles.submitButton}>
            Submit
        </button>
    </form>
  )
};