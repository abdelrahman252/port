import Navbar from "./components/navbar/NavBar";
import Banner from "./components/banner/Banner";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ScrollToTop from "./components/scrollTop/ScrollToTop";

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  return (
    !loading && (
      <div className="App">
        <ScrollToTop showBelow={250} />
        <Navbar />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    )
  );
}

export default App;
