import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Experience from "./pages/Experience"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import ProjectsDisplay from "./pages/ProjectsDisplay"

const App = () => {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:id" element={<ProjectsDisplay />} />
                    <Route path="/experience" element={<Experience />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}

export default App
