import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import React, { Suspense, lazy } from "react";
import { useEffect } from "react";

const Navbar = lazy(() => import("./components/navbar/NavBar"));
const Skills = lazy(() => import("./components/skills/Skills"));
const Banner = lazy(() => import("./components/banner/Banner"));
const Projects = lazy(() => import("./components/projects/Projects"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Footer = lazy(() => import("./components/footer/Footer"));
const PopUp = lazy(() => import("./components/popup/PopUp"));
const ScrollToTop = lazy(() => import("./components/scrollTop/ScrollToTop"));

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  const [pop, setPop] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPop(true);
    }, 20000);
  }, []);

  return (
    !loading && (
      <div className="App">
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
          {pop && <PopUp setPop={setPop} />}
          <ScrollToTop showBelow={250} />
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
