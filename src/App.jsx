import styles from "./App.module.css"
import { Hero } from "./components/Navbar/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./components/Navbar/About/About";
import { Experience } from "./components/Experience/Experience"

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience/>
    </div>
  );
}

export default App;