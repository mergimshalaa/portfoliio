import { Home } from "./pages/HomePage/HomePage";
import "./App.css";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { AboutPage } from "./pages/About/AboutPage";
import { ProjectsPage } from "./pages/Projects/ProjectsPage";
import { ResumePage } from "./pages/Resume/ResumePage";
import { Header } from "./components/Header/Header";
import { useState } from "react";
import { Loader } from "./components/Loader/Loader";
import ScrollToTop from "./components/ScrollToTop";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <>
    {isLoading ? (
      <Loader onFinish={() => setIsLoading(false)} />
    ) : (
    <>
      <Header />
      <Container>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </Container>
      <Footer />
    </>
    )}
    </>
  );
}

export default App;
