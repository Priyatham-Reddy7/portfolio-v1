import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { Reorder } from "@mui/icons-material"
import "./navbar.css"

const Navbar = () => {
    const [expandNavbar, setExpandNavbar] = useState(false)
    const location = useLocation()

    //?sets togglebar to false whenever url changes
    useEffect(() => {
        setExpandNavbar(false)
    }, [location])

    return (
        <>
            <div className="navbar" id={expandNavbar ? "open" : "close"}>
                <div className="toggleButton">
                    <button onClick={() => setExpandNavbar((prev) => !prev)}>
                        <Reorder />
                    </button>
                </div>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/experience">Experience</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
