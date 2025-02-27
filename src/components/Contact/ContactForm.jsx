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
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // EmailJS service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // EmailJS template ID
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        () => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return  (
    <form 
      ref={formRef} 
      onSubmit={handleSubmit} 
      className={styles.contactForm}
    >
        <input
            type="text"
            name="to_name"
            placeholder="Name *"
            required
            className={styles.inputField}
        />

        <input
            type="email"
            name="email_id"
            placeholder="Email *"
            required
            className={styles.inputField}
        />

        <input
            type="text"
            name="subject"
            placeholder="Subject *"
            required
            className={styles.inputField}
        />

        <textarea
            name="message"
            placeholder="Message *"
            className={styles.textareaField}
            required
        >
        </textarea>

        <button 
          type="submit" 
          className={styles.submitButton}
        >
            Submit
        </button>
    </form>
  )
};