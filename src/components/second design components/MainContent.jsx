import mainContentCSS from "../../styles/second design styles/maincontent.module.css";
import ceoMentor from "../../img/ceo mentor.png";
import brand from "../../img/brand.png";
import ceoFound from "../../img/ceo found.png";
function MainContent() {
    return ( 
        <div className={mainContentCSS.maincontent}>
         <div>
            <img src={ceoMentor} alt="ceo mentor" />
            <div>
                <h1>CEO Mentor</h1>
                <p>Government Match | Strategy Match</p>
                <a href="">Learn More & Order</a>
            </div>
         </div>

         <div>
            <img src={brand} alt="branding" />
            <div>
                <h1> Branding Review</h1>
                <p>Creativity Match | Strategy Match</p>
                <a href="">Learn More & Order</a>
            </div>
         </div>

         <div>
            <img src={ceoFound} alt="ceo found" />
            <div>
                <h1>CEO Found</h1>
                <p>Government Match | Strategy Match</p>
                <a href="">Learn More & Order</a>
            </div>
         </div>
        </div>
     );
}

export default MainContent;