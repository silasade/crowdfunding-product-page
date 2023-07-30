import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import logo from "../images/logo.svg";
import menu from "../images/icon-hamburger.svg";
import close from "../images/icon-close-menu.svg";
import desktop from "../images/image-hero-desktop.jpg";
import mobile from "../images/image-hero-mobile.jpg";

function Header() {
  const [width, setWidth] = useState(window.screen.width);
  const [value, setvalue] = useState(true);
  const elementRef = useRef(null);
  const [animationDirection, setAnimationDirection] = useState("up");

  const handleClick = () => {
    if (animationDirection === "up") {
      gsap.to(elementRef.current, { y: "10%", ease: "power4.out", duration: 1 });
      setAnimationDirection("down");
    } else {
      gsap.to(elementRef.current, { y: 0, ease: "power3.out", duration: 0.5 });
      setAnimationDirection("up");
    }
  };

  useEffect(() => {
    function handleResize() {
      setWidth(window.screen.width);
    }
    window.addEventListener("resize", handleResize);
    console.log(width);
  });

  var truth = true;
  width <= 450 ? (truth = false) : (truth = true);
  var style5 = truth == false ? { display: "none" } : {  display: "flex",
  
  
  fontSize: "100%",
  flexDirection: "row",};
  var style = truth == true ? { display: "none" } : 
  {display:"block"
  };
  var style1 = truth == false
    ? {
        backgroundImage: `url(${mobile})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }
    : {
        backgroundImage: `url(${desktop})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        
      };

  var logoos = value == true ? menu : close;
  var style2 = value == true
    ? { display: "none" }
    : {
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        fontSize: "120%",
        flexFlow: "column",
        padding: "10%",
        borderRadius:"5%"
      };
  function handleclick() {
    setvalue(!value);
  }
  return (
    <header style={style1}>
      <div className="menu" onClick={handleClick}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <img src={logo} alt="" />
          <li onClick={handleclick} style={style}>
            <img src={logoos} alt="" />
          </li>
        </div>
        <div style={style5}>
          <ul
            
            className="inn"
          >
            <li>
              <a href="#">About</a>
            </li>
            
            <li>
              <a href="#">Discover</a>
            </li>
            
            <li>
              <a href="#">GetStarted</a>
            </li>
          </ul>
        </div>
        <div>
          <ul
            className="inner"
            ref={elementRef}
            style={{ ...style2, y: animationDirection === "up" ? 0 : "30%" }}
          >
            <li>
              <a href="#">About</a>
            </li>
            <hr/>
            <li>
              <a href="#">Discover</a>
            </li>
            <hr/>
            <li>
              <a href="#">GetStarted</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
