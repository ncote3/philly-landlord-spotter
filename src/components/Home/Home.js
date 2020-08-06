import React from "react";
import './Home.scss';
import citySVG from './../../assets/381804685-vector.svg';
import HomeButton from "../HomeButton/HomeButton";

export default function Home() {
    return (
        <div className='home' style={{ backgroundImage: `url(${citySVG})`, }}>
            <div className="heroDivContainer">
                <div className="heroDivOne">
                    <p className="heroText">Who Owns<br/>Philly?</p>
                </div>
                <div className='bottomButtonRow'>
                    <HomeButton link={'/ownerPicker'} fontSize='24pt' text='View Map' />
                    <HomeButton link={'/zipCodeAnalysis'} fontSize='18pt' text='Zip Code Analysis' />
                    <HomeButton link={'/data'} fontSize='24pt' text='Data Info' />
                </div>
            </div>
        </div>
    )
}
