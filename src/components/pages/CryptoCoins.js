import React, { useEffect, useState } from 'react';
import CoinHighLights from '../contents/CoinHighLights';
import axios from 'axios';

const CryptoCoins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: "USD",
            order: "market_cap_desc",
            per_page: 100,
            page: 1,
            sparkline: false,
          },
        }
      );
      setCoins(response.data);
      setLoading(false);
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Initial Fetch
  }, []);

  return (
    <>
      <CoinHighLights />
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching data. Please try again.</p>}
      <div className="coin-card-container">
        {coins.map((e) => (
          <div key={e.id} className="coin-card-contain">
            <div className="coin-card-img-contain">
              <img className='c-coin-img' src={e.image} alt="Coin" />
              <h4 className="coin-s-heading">{e.symbol.toUpperCase()}</h4>
              <i className="icon-f-coin bx bx-bookmark"></i>
            </div>
            <div className="coin-down-contain">
              <h4 className="coin-heading">{e.name}</h4>
              <p className="text-coin">
                <span className="coin-sub-text">Price: </span>
                <span className="currency-item">$</span>
                <span className="main-text-coin-text">
                  {e.current_price.toFixed(2)}
                </span>
                <span className="price-coin-icon-span">
                  <i
                    className={`icon-coin-price bx ${e.price_change_percentage_24h > 0 ? "bx-chevron-up" : "bx-chevron-down"}`}
                    style={{ color: e.price_change_percentage_24h > 0 ? "green" : "red" }}
                  ></i>

                </span>
              </p>
              <p className="text-coin-m-cap">
                <span className="currency-item-m-cap">CAP: $</span>
                <span className="m-cap-text">{e.market_cap.toLocaleString()}</span>
              </p>
              <p className='cps'><span className='price-h' style={{ color: `${e.price_change_percentage_24h > 0 ? "green" : "red"}` }} >{e.price_change_percentage_24h.toFixed(2)}%</span> <span className='price-icon-h'><i className={`price-icon-main bx ${e.price_change_percentage_24h > 0 ? "bxs-up-arrow" : "bxs-down-arrow"}`} style={{ color: `${e.price_change_percentage_24h > 0 ? "green" : "red"}` }} ></i></span> </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CryptoCoins;
