import footerimg from "../img/footer-img.png";
function Footer() {
  return (
    <footer className="footer">
      <p>
        Powered By <img src={footerimg} alt="footer-img" />
      </p>
    </footer>
  );
}

export default Footer;
