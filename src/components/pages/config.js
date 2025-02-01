import React, { useState, useEffect } from "react";

const Forex = () => {
  const [currencies, setCurrencies] = useState(["USD", "EUR"]);
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);

  // Fetch Exchange Rate
  useEffect(() => {
    if (currencies[0] !== currencies[1]) {
      fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currencies[0]}&to=${currencies[1]}`)
        .then((res) => res.json())
        .then((data) => {
          setExchangeRate(data.rates[currencies[1]]);
          setConvertedAmount((amount * data.rates[currencies[1]]).toFixed(2));
        })
        .catch((error) => console.error("Error fetching exchange rate:", error));
    }
  }, [amount, currencies]);

  return (
    <div style={styles.container}>
      <h1>Forex Exchange</h1>

      {/* Currency Selection Card */}
      <div style={styles.card}>
        <h2>Currency Converter</h2>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={styles.input}
          />
        </div>
        <div>
          <label>From:</label>
          <select
            value={currencies[0]}
            onChange={(e) => setCurrencies([e.target.value, currencies[1]])}
            style={styles.select}
          >
            {["USD", "EUR", "GBP", "INR", "JPY", "AUD", "CAD"].map((cur) => (
              <option key={cur} value={cur}>{cur}</option>
            ))}
          </select>
        </div>
        <div>
          <label>To:</label>
          <select
            value={currencies[1]}
            onChange={(e) => setCurrencies([currencies[0], e.target.value])}
            style={styles.select}
          >
            {["USD", "EUR", "GBP", "INR", "JPY", "AUD", "CAD"].map((cur) => (
              <option key={cur} value={cur}>{cur}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Exchange Rate Card */}
      <div style={styles.card}>
        <h2>Exchange Rate</h2>
        {exchangeRate ? (
          <>
            <p>
              {amount} {currencies[0]} = {convertedAmount} {currencies[1]}
            </p>
            <p>Rate: 1 {currencies[0]} = {exchangeRate} {currencies[1]}</p>
          </>
        ) : (
          <p>Select different currencies to convert.</p>
        )}
      </div>
    </div>
  );
};

// Basic Styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    padding: "20px",
  },
  card: {
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    background: "#fff",
    width: "300px",
  },
  input: {
    padding: "8px",
    width: "80px",
    margin: "10px",
  },
  select: {
    padding: "8px",
    margin: "10px",
  },
};

export default Forex;
