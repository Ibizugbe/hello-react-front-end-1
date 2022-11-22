import React, { useState, useEffect } from 'react';

export default function Greetings() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [quote, setQuote] = useState({});

  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  useEffect(() => {
    fetch('http://localhost:3001/greetings_api', options)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setQuote(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        },
      );
  }, []);

  if (error) {
    return <div>{`Error: ${error.message}`}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <q >{quote.message}</q>
    </div>
  );
}
