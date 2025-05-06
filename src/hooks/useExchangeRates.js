import { useState, useEffect } from "react";
import axios from "axios";

export default function useExchangeRates(base = "USD") {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await axios.get(
          `https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_EXCHANGE_API_KEY}/latest/${base}`
        );
        setRates(res.data.conversion_rates);
      } catch (error) {
        console.error("Error fetching exchange rates", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, [base]);

  return { rates, loading };
}
