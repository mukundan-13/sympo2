import React from "react";
import "./index.css";
import Header  from "./Header"
const Home = () => {
  return (
    <>
    
    <div className="con">
   
        <div className="home-con">
      <div className="img">
        <img src="fin.jpg" className="img" />
        <p className="glowing-text">Department of Computer Science</p>
      </div>
      <div>
        <p className="glowing-text ">Where Innovation Meets sliver Screen</p>
        
      </div>
      <div className="img-con">
      <img src="cam.png" className="img-in" />
      <div className="quote">
      
          <p className="glowing-text ">
            Join us for a spectacular journey into technology,creativity,and
            innovation,all wrapped in the charm of Retro Cinema
          </p>
        </div>
        <img src="pop.jpg" className="img-in" />
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
