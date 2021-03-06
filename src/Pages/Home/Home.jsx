// import { useRef, useEffect, useState } from 'react';
import fruitsImage from "../../images/vegetebles.png";
import "./Home.css";
import logo from "../../images/stamp.svg";
import { useInView } from "react-intersection-observer";

function Home(props) {
  const { ref: myRef, inView: navNumber } = useInView();

  if (navNumber) {
    props.changeNav("1");
  }

  return (
    <div  id="home-section">
      <div  className="home-div">
        <img className="fuits-image" src={fruitsImage} alt="fruits" />

        <img className="logo-image" src={logo} alt="logo" />
        <div className="title">
          <h1 ref={myRef}>
            <span className="first-title">THE BEST FOODIE</span>
            <span className="second-title">EXPERIENCE</span>
          </h1>
          <h2>NOW IN LONDON</h2>
        </div>
      </div>
      <div className="request-info">
        <a href="#clolaborate-section">REQUEST INFO</a>
      </div>
    </div>
  );
}

export default Home;
