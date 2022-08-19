import logo from "../img/logo.png";
import imageCSS from "../styles/image.module.css"
function Image() {
  return (
    <div className= {imageCSS.image}>
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Image;
