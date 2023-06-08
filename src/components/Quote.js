import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetch('https://api.api-ninjas.com/v1/quotes', {
          headers: { 'X-Api-Key': 'G+WCxNRxZAtVRcXM04NZmA==wC2Xzkf2ravTdHUN' },
        });
        const result = await data.json();
        setQuote(result[0].quote);
      } catch (error) {
        setHasError(true);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h2 className="quote">
        {hasError && <div>Some thing went wrong!</div>}
        {loading && <div>Loading...</div>}
        <span>{quote}</span>
      </h2>
    </div>
  );
};

export default Quote;
