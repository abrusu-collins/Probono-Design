import SettingsButtonCSS from "../../styles/second design styles/settingsbutton.module.css";
import cog from "../../img/cog.png";
function SettingsButton() {
  return (
    <div className={SettingsButtonCSS.settingsbutton}>
      <img src={cog} alt="cog" />
    </div>
  );
}

export default SettingsButton;
