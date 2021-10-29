import React from "react";
import "./Home.scss";
import HomeButton from "../HomeButton/HomeButton";

export default function Home() {
  return (
    <div className="home">
      <div className="heroDivContainer">
        <div className="heroDivOne">
          <p className="heroText">
            Who Owns
            <br />
            Philly?
          </p>
        </div>
        <div className="bottomButtonRow">
          <HomeButton
            link={"/ownerPicker"}
            fontSize="18pt"
            text="View Property Map"
          />
          <HomeButton
            link={"/zipCodeAnalysis"}
            fontSize="18pt"
            text="Zip Code Analysis"
          />
          <HomeButton
            link={"/ownerSearch"}
            fontSize="18pt"
            text="Owner Search"
          />
          <HomeButton
            link={"/data"}
            fontSize="18pt"
            text="Data Info"
            nameClass="homeButton bottomRow"
          />
        </div>
      </div>
    </div>
  );
}
