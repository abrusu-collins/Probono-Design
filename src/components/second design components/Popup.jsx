import popupCSS from "../../styles/second design styles/popup.module.css";
import SettingsButton from "./SettingsButton";
import ImageandHeading from "./ImageandHeading";
import MainContent from "./MainContent";
import Footer from "./Footer";
function Popup() {
  return (
    <div className={popupCSS.popup}>
      <SettingsButton />
      <ImageandHeading />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Popup;
