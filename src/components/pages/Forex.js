import React, { useState, useEffect } from "react";
import CurrencyItems from "../JSON/Currency";

const Forex = () => {
  const [rates, setRates] = useState({});
  const [prevRates, setPrevRates] = useState({});
  const baseCurrency = "USD";

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(`https://api.frankfurter.app/latest?from=${baseCurrency}`);
        const data = await response.json();
        setRates(data.rates);

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const formattedDate = yesterday.toISOString().split("T")[0];

        const prevResponse = await fetch(`https://api.frankfurter.app/${formattedDate}?from=${baseCurrency}`);
        const prevData = await prevResponse.json();
        setPrevRates(prevData.rates);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    fetchRates();
    const interval = setInterval(fetchRates, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="coin-card-container" >
      {CurrencyItems.map((item) => {
        const currentRate = rates[item.code] || 0;
        const previousRate = prevRates[item.code] || 0;
        const change = currentRate - previousRate;
        const percentageChange = previousRate ? ((change / previousRate) * 100).toFixed(2) : 0;

        return (
          <div className="coin-card-contain" key={item.code}>
            <div className="coin-card-img-contain">
              <div className="coin-heading-config">
            <img className="c-coin-img" src={item.img} alt={item.title}/>
            <h4 className="heading-for">{item.code}</h4>
              </div>
              <i className="bx bx-bookmark"></i>
            </div>
              <h4 className="heading-m-for">{item.title}</h4>
            <p className="text-for" ><span className="cur-text-span">Rate:</span>{currentRate.toFixed(4)}</p>
            <p style={{ color: change > 0 ? "green" : change < 0 ? "red" : "black", fontWeight: "bold" }}>
              <span className="span-text-for
              ">{percentageChange}%</span>{change > 0 ? <i class='bx bx-trending-up' ></i> : change < 0 ? <i class='bx bx-trending-down' ></i> : "▬"}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Forex;
