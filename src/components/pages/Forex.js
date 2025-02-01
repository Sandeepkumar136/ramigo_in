import React, { useState, useEffect } from "react";
import CurrencyItems from "../JSON/Currency";

const Forex = () => {
  const [rates, setRates] = useState({});
  const [prevRates, setPrevRates] = useState({});
  const baseCurrency = "USD";

  useEffect(() => {
    const fetchRates = async () => {
      try {
        // Fetch latest exchange rates
        const response = await fetch(`https://api.frankfurter.app/latest?from=${baseCurrency}`);
        const data = await response.json();
        setRates(data.rates);
        console.log("Latest Rates:", data.rates);

        // Get the last business day
        let yesterday = new Date();
        let day = yesterday.getDay(); // Get day of the week (0 = Sunday, 6 = Saturday)

        if (day === 0) { // If today is Sunday, go back to Friday
          yesterday.setDate(yesterday.getDate() - 2);
        } else if (day === 6) { // If today is Saturday, go back to Friday
          yesterday.setDate(yesterday.getDate() - 1);
        } else { // Normal day, go back one day
          yesterday.setDate(yesterday.getDate() - 1);
        }

        let formattedDate = yesterday.toISOString().split("T")[0];

        // Fetch previous day's exchange rates
        let prevResponse = await fetch(`https://api.frankfurter.app/${formattedDate}?from=${baseCurrency}`);
        let prevData = await prevResponse.json();

        if (!prevData.rates || JSON.stringify(prevData.rates) === JSON.stringify(data.rates)) {
          console.warn("Yesterday's rates are same as today's, fetching two days ago...");
          let twoDaysAgo = new Date(yesterday);
          twoDaysAgo.setDate(yesterday.getDate() - 1);
          let twoDaysAgoFormatted = twoDaysAgo.toISOString().split("T")[0];

          prevResponse = await fetch(`https://api.frankfurter.app/${twoDaysAgoFormatted}?from=${baseCurrency}`);
          prevData = await prevResponse.json();
        }

        setPrevRates(prevData.rates || {});
        console.log("Previous Rates:", prevData.rates);

      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    fetchRates();
    const interval = setInterval(fetchRates, 60000); // Refresh every 60 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="coin-card-container">
      {CurrencyItems.map((item) => {
        const currentRate = rates[item.code] || 0;
        const previousRate = prevRates[item.code] || null;

        let percentageChange = "N/A";

        if (previousRate !== null) {
          const change = currentRate - previousRate;
          percentageChange = ((change / previousRate) * 100).toFixed(2);
        }

        console.log(`Currency: ${item.code}, Current: ${currentRate}, Previous: ${previousRate}, % Change: ${percentageChange}`);

        return (
          <div className="coin-card-contain" key={item.code}>
            <div className="coin-card-img-contain">
              <div className="coin-heading-config">
                <img className="c-coin-img" src={item.img} alt={item.title} />
                <h4 className="heading-for">{item.code}</h4>
              </div>
              <i className="bx bx-bookmark"></i>
            </div>
            <h4 className="heading-m-for">{item.title}</h4>
            <p className="text-for">
              <span className="cur-text-span">Rate:</span> {currentRate.toFixed(4)}
            </p>
            <p className="pera_icon_for" style={{ color: percentageChange > 0 ? "green" : percentageChange < 0 ? "red" : "black", fontWeight: "bold" }}>
              <span className="span-text-for">{percentageChange}%</span>
              {percentageChange > 0 ? (
                <i className="icon-for bx bx-trending-up"></i>
              ) : percentageChange < 0 ? (
                <i className="icon-for bx bx-trending-down"></i>
              ) : (
                "▬"
              )}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Forex;
