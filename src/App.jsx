import styles from "./App.module.css";
import  Experience  from "./components/Experience/Experience";
import { Contact } from "./components/Contact/Contact";
import { Profile } from "./components/Profile/Profile";
import { Navbar } from "./components/Navbar/Navbar";
import { Certifications } from "./components/Certifications/Certifications";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Profile />
      <Skills />
      <Certifications />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
