import React, { useState, useEffect } from "react";
// import React from "react";
import BackgroundColor from "./BackgroundColor";
import QuoteBody from "./QuoteBody";
import ButtonBar from "./ButtonBar";
export default function QuoteBox() {
  const [quote, setQuote] = useState({});

  const randomNumber = (max) => {
    return Math.floor(Math.random() * max);
  };

  const generateQuote = async function () {
    try {
      const request = await fetch("https://type.fit/api/quotes");
      const data = await request.json();
      return data;
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  const getQuote = async function () {
    const quote = await generateQuote();
    const theQuote = quote[randomNumber(quote.length)];
    setQuote({ text: theQuote.text, author: theQuote.author || "unknown" });
    BackgroundColor();
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div id="quote-box" className="quote-box">
      <QuoteBody quote={quote} />
      <ButtonBar quote={quote} setQuote={setQuote} getQuote={getQuote} />
      {/* <QuoteBody quote={quote} setQuote={setQuote}/>
            <ButtonBar quote={quote} setQuote={setQuote}/> */}
    </div>
  );
}
