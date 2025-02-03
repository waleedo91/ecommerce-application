import { useState, useEffect } from "react";

const useFetch = (URL) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(URL)
        .then((response) => {
          if (!response.ok) {
            throw Error("Could not find products");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error(error.message);
        });
    }, 1000);
  }, []);

  return { data };
};

export default useFetch;
