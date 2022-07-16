import Email from "@mui/icons-material/Email"
import Linkedin from "@mui/icons-material/Linkedin"
import Github from "@mui/icons-material/Github"
import "../pageStyles/Home.css"

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="about">
                    <h2>Hi, My Name is Priyatham</h2>
                    <div className="prompt">
                        <p>
                            Software Developer with a passion for learning and
                            creating
                        </p>
                        <a href="https://www.linkedin.com/in/priyatham-reddy147/">
                            <Linkedin />
                        </a>
                        <a href="https://github.com/Priyatham-Reddy7">
                            <Github />
                        </a>
                        <a href="#">
                            <Email />
                        </a>
                    </div>
                </div>
                <div className="skills">
                    <h1>Skills</h1>
                    <ol className="list">
                        <li className="item">
                            <h2>Front-End</h2>
                            <span>
                                HTML, CSS, ReactJS, Bootstrap, MaterialUI,
                                StyledComponents
                            </span>
                        </li>
                    </ol>
                    <ol className="list">
                        <li className="item">
                            <h2>Back-End</h2>
                            <span>NodeJS, ExpressJS, MongoDB, MySQL</span>
                        </li>
                    </ol>
                    <ol className="list">
                        <li className="item">
                            <h2>Languages</h2>
                            <span>JavaScript, Python, TypeScript</span>
                        </li>
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Home
