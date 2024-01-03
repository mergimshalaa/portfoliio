import { Home } from "./pages/HomePage/HomePage"
import "./App.css"
import { Container } from "react-bootstrap"
import { Route, Routes } from "react-router-dom"
import { AboutPage } from "./pages/About/AboutPage"
import { ProjectsPage } from "./pages/Projects/ProjectsPage"
import { ResumePage } from "./pages/Resume/ResumePage"

function App() {
  return (
    <>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/resume" element={<ResumePage />} />
            </Routes>
          </Container>
    </>
  )
}

export default App
