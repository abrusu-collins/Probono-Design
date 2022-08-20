import footerCSS from "../../styles/second design styles/footer.module.css";
import footerimg from "../../img/footer-img.png";
function Footer() {
    return ( 
        <div className={footerCSS.footer}>

            <p>Powered By <img src={footerimg} alt="footerimage" /></p>
        </div>
     );
}

export default Footer;