import mainContentCSS from "../../styles/second design styles/maincontent.module.css";

function MainContent() {
  return (
    <div className={mainContentCSS.maincontent}>
      <div>
        <img src=" " alt="" />
        <div>
          <h1>CEO Mentor</h1>
          <p>Government Match | Strategy Match</p>
          <a href="">Learn More & Order</a>
        </div>
      </div>

      <div>
        <img src= " " alt="" />
        <div>
          <h1> Branding Review</h1>
          <p>Creativity Match | Strategy Match</p>
          <a href="">Learn More & Order</a>
        </div>
      </div>

      <div>
        <img src=" " alt="" />
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
