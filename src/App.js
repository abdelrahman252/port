import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ScrollToTop from "./components/scrollTop/ScrollToTop";
import React, { Suspense, lazy } from "react";
const Navbar = lazy(() => import("./components/navbar/NavBar"));
const Skills = lazy(() => import("./components/skills/Skills"));
const Banner = lazy(() => import("./components/banner/Banner"));
const Projects = lazy(() => import("./components/projects/Projects"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Footer = lazy(() => import("./components/footer/Footer"));

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
        <Suspense
          fallback={
            <div
              style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "impact",
                fontSize: "30px",
              }}
            >
              Loading...
            </div>
          }
        >
          <Navbar />
          <Banner />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    )
  );
}

export default App;
