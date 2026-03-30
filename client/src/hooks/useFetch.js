import React, { useEffect, useState } from "react";

const useFetch = (address, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // console.log(address, options)

  const fetchData = async () => {
      try {
        setLoading(true)
        const url = import.meta.env.VITE_SERVER_URL;
        const res = await fetch(`${url}/${address}`, options);
        const fetchedData = await res.json()
        console.log(fetchedData, "this data");
        if (fetchedData.success) {
          setData(fetchedData);
        } else {
            setError(fetchedData.error)
        }
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    };

  useEffect(() => {
    fetchData();
  }, [address]);

  return {data, loading, error}
};

export default useFetch;