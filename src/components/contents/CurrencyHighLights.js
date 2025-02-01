import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CurrencyHighlights = () => {
  const [rates, setRates] = useState({});
  const [prevRates, setPrevRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const baseCurrency = "USD";
  const selectedCurrencies = ["INR", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF", "CNY", "SGD", "NZD"];

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);
        setError(false);

        // Fetch today's exchange rates
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
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
    const interval = setInterval(fetchRates, 60000); // Refresh every 60 seconds
    return () => clearInterval(interval);
  }, []);

  const sliderSettings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5, // Default for large screens
    slidesToScroll: 2,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="highlight-coins">
      {loading && <div>Loading...</div>}
      {error && <div className="error">Error fetching exchange rates.</div>}
      {!loading && !error && rates ? (
        <Slider {...sliderSettings}>
          {selectedCurrencies.map((currency) => {
            const currentRate = rates[currency] || 0;

            return (
              <div className="slider-items" key={currency}>
                <div className="hc-con-a-b">
                  <h4 className="c-h-heading">{currency}</h4>
                  <p className="c-h-text">${currentRate.toFixed(4)}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      ) : (
        <div>No Currency Data Available</div>
      )}
    </div>
  );
};

export default CurrencyHighlights;
