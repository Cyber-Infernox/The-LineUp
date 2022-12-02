import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const [quote, setQuote] = useState(
    "Wanna interact with me?......Ask my API first."
  );
  const [author, setAuthor] = useState("Sayon Kar");

  // const api = "https://favqs.com/api/qotd";
  const api = "https://api.quotable.io/random";

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(api, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("!!Quote Loading Failed!!");
          }
          return res.json();
        })
        .then((quote) => {
          // setQuote(quote.body);
          // setAuthor(quote.author);
          setQuote(quote.content);
          setAuthor(quote.author);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, 2000);

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("!!Fetch Failed!!");
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch Aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error, quote, author };
};

export default useFetch;
