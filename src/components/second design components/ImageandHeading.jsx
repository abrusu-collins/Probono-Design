import imageandheadingCSS from "../../styles/second design styles/imageandheading.module.css";
import logo from "../../img/logo.png"

function ImageandHeading() {
    return ( 
        <div className={imageandheadingCSS.imageandheading}>
            <img src={logo} alt="logo" />
            <h1 className={imageandheadingCSS.heading}>New Project Matches</h1>
        </div>
     );
}

export default ImageandHeading;