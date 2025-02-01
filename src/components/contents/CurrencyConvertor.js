import React, { useState, useEffect } from "react";
import CurrencyItems from "../JSON/Currency";

const CurrencyConvertor = () => {
  const [currencies, setCurrencies] = useState(["USD", "EUR"]);
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);

  // Fetch Exchange Rate
  useEffect(() => {
    if (currencies[0] !== currencies[1] && amount > 0) {
      fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currencies[0]}&to=${currencies[1]}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.rates && data.rates[currencies[1]]) {
            setExchangeRate(data.rates[currencies[1]]);
            setConvertedAmount((amount * data.rates[currencies[1]]).toFixed(2));
          } else {
            setExchangeRate(null);
            setConvertedAmount(null);
          }
        })
        .catch((error) => console.error("Error fetching exchange rate:", error));
    } else {
      setExchangeRate(null);
      setConvertedAmount(null);
    }
  }, [amount, currencies]);

  return (
    <div>
      <h1 className="heading-c-c">Currency Converter.</h1>
      <div className="c-e-container">

        <div className="c-c-input-container">
          <div className="c-c-input-contain">
            <label className="label-c-c" >Amount:</label>
            <input className="input-c-c"
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              min="1"
            />
          </div>

          <div className="c-c-input-contain">
            <label className="label-c-c" >From:</label>
            <select className="input-c-c"
              value={currencies[0]}
              onChange={(e) => setCurrencies([e.target.value, currencies[1]])}
            >
              {CurrencyItems.map((cur) => (
                <option key={cur.code} value={cur.code}>{cur.code}</option>
              ))}
            </select>
          </div>

          <div className="c-c-input-contain">
            <label className="label-c-c" >To:</label>
            <select className="input-c-c"
              value={currencies[1]}
              onChange={(e) => setCurrencies([currencies[0], e.target.value])}
            >
              {CurrencyItems.map((cur) => (
                <option key={cur.code} value={cur.code}>{cur.code}</option>
              ))}
            </select>
          </div>

        </div>
        {/* Exchange Rate Card */}
        <div>
          <div className="res-c-c">

          <h2 className="heading-res-c" >Exchange Rate</h2>
          {exchangeRate ? (
            <>
              <p className="text-c-c" >
                {amount} {currencies[0]} = {convertedAmount} {currencies[1]}
              </p>
              <p className="text-c-c" >Rate: 1 {currencies[0]} = {exchangeRate} {currencies[1]}</p>
              </>
            ) : (
              <p className="text-c-c" style={{ color: "red" }}>Select different currencies to convert.</p>
            )}
        </div>
            </div>
      </div>
    </div>
  );
};

export default CurrencyConvertor;
