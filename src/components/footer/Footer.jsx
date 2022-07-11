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
                    <Instagram />
                    <Twitter />
                    <Facebook />
                    <Linkedin />
                </div>
                <p>&copy; Priyatham.com</p>
            </div>
        </>
    )
}

export default Footer
