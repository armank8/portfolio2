import "../App.css";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import Stats from "./Stats";
import Testimonials from "./Testimonials";

function App() {
  return (
    <div style={{ marginTop: "5rem" }}>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>
      <Stats></Stats>
      <Testimonials></Testimonials>
    </div>
  );
}

export default App;
