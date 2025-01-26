import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CoinHighlightContext = createContext();

const CoinHighlightProvider = ({ children }) => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cerror, setCError] = useState(false);

  const fetchCoins = async () => {
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

      setCoins(response.data.slice(0, 20));
      setLoading(false);
      setCError(false);
    } catch (error) {
      console.error("Error Thrown: ", error);
      setLoading(false);
      setCError(true);
    }
  };

  useEffect(() => {
    let isMounted = true; // Flag to check if component is mounted
    if (isMounted) fetchCoins();
    
    return () => {
      isMounted = false; // Cleanup flag when component unmounts
    };
  }, []);

  return (
    <CoinHighlightContext.Provider value={{ coins, loading, cerror, fetchCoins }}>
      {children}
    </CoinHighlightContext.Provider>
  );
};

export default CoinHighlightProvider;