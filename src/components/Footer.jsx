import footerimg from "../img/footer-img.png";
import footerCSS from "../styles/footer.module.css";
function Footer() {
  return (
    <footer className= {footerCSS.footer}>
      <p>
        Powered By <img src={footerimg} alt="footer-img" />
      </p>
    </footer>
  );
}

export default Footer;
