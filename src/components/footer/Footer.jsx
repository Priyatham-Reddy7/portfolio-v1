import "./footer.css"
import Instagram from "@mui/icons-material/Instagram"
import Twitter from "@mui/icons-material/Twitter"
import Facebook from "@mui/icons-material/Facebook"
import Linkedin from "@mui/icons-material/Linkedin"

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="socialMedia">
                    <a href="https://www.linkedin.com/in/priyatham-reddy147/">
                        <Linkedin />
                    </a>
                    <a href="https://www.instagram.com/p_r_i_m_y_7/">
                        <Instagram />
                    </a>
                    <a href="https://www.facebook.com/priyatham.reddy.5268/">
                        <Facebook />
                    </a>
                </div>
                <p>&copy; Priyatham.com</p>
            </div>
        </>
    )
}

export default Footer
