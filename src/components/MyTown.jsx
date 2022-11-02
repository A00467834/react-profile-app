import React, { useEffect, useState } from 'react';
import mild from "../assets/mild.png";
import cold from "../assets/cold.png";
import sunny from "../assets/sunny.png";

import './MyTown.css';

const MyTown = () => {

    const [tempData, setTempData] = useState({temp: 0, cel: true})

    const getWeather = async () => {
        const data = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=13.0827&lon=80.2707&appid=6e432fba2604fe55045b2e6b60a2a147")
        data.json().then((sData) => setTempData(state => ({...state, temp: Math.round(+sData.main.temp - 273.15)})));
    }

    useEffect(() => {
        getWeather();
    }, []);

    const convertTemp = () => {
        if (tempData.cel) {
            let temp = Math.round((tempData.temp * (9/5)) + 32);
            setTempData({
                cel: false,
                temp
            });
        } else {
            let temp = Math.round((tempData.temp - 32) * (5/9));
            setTempData({
                cel: true,
                temp
            });
        }
    }

    return (
        <div>
           <img alt="town-img" src="https://www.tourmyindia.com/socialimg/weekend-getaways-chennai.webp" height={300} width="100%"/>
           <p className='town-name'>I'm from Chennai, India</p>
           <p>Chennai is the capital city of the State of Tamil Nadu which forms the southern tip of India at the Indian ocean.</p>
           <div className='weather-section'>
                <p style={{fontSize: 'xx-large'}}>{tempData.temp} &deg;</p>
                <div className='unit-indicator'>
                    <button className={`unit-btns ${tempData.cel ? 'active-unit-btn' : ''}`} disabled={tempData.cel} onClick={convertTemp}>C</button>
                    <button className={`unit-btns ${tempData.cel ? '' : 'active-unit-btn'}`} disabled={!tempData.cel} onClick={convertTemp}>F</button>
                </div>
            <img src={
                tempData.cel ? 
                (tempData.temp < 11 ? cold : (tempData.temp < 21 ? mild : sunny)) : 
                (tempData.temp < 52 ? cold : (tempData.temp < 70 ? mild : sunny))
            } height={50} width={50} /> 
           </div>
        </div>
    )
}

export default MyTown;