import axios from 'axios';
import { useState, useEffect } from "react";
import 'chart.js/auto';

const Cards = () => {
    const [cryptoData, setCryptoData] = useState([]);
    
    useEffect(() => {
        axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then((res) => {
                if (res.data.bpi) {
                    const updatedCryptoData = Object.entries(res.data.bpi).map(([code, { rate, symbol }]) => ({
                        code,
                        rate,
                        symbol: symbol // Store symbol as HTML entity
                    }));
                    setCryptoData(updatedCryptoData);
                }
            })
            .catch(error => {
                console.error("Error fetching crypto data:", error);
            });
    }, []);

    return (
        <div className='main-cards'>
            {cryptoData.map((crypto, index) => (
                <div key={index} className='card'>
                    <div className='card-inner'>
                        <h3>{crypto.code}</h3>
                        <p dangerouslySetInnerHTML={{ __html: crypto.symbol }}></p> {/* Render symbol as HTML */}
                    </div>
                    <h1>{crypto.rate}</h1>
                </div>
            ))}
        </div>
    );
}

export default Cards;

