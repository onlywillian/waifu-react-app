import React, { useState } from 'react';
import axios from 'axios'

import './Waifu.css'

const Waifu = () => {
    const [pic, setPic] = useState("");

    async function handleClick(e) {
        e.preventDefault();

        const response = await axios.get("https://api.waifu.pics/sfw/waifu");

        setPic(response.data.url);
    }

    return ( 
        <div className="waifu-container">
            <h1>Chose Your Waifu:</h1>
            <button onClick={handleClick}>New Waifu For Me!</button>
            <img src={pic} className="waifu-picture" />
            <i>Prohibited Jacking Off</i>
        </div>
     );
}
 
export default Waifu;