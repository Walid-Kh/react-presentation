import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa";
import { Btn } from "../../Components/Btn";
import { CodeBlock } from "../../Components/CodeBlock";
import { useFetch } from "../../util/UseFetch";

export const DataFetchingFetch = () => {
  return (
    <CodeBlock fileName="DataFetching.tsx">
      {`export const DataFetching = () => {
  const [quote, setQuote] = useState({
    author: "",
    id: 0,
    quote: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  
  const fetchQuote = async () => {
    setIsLoading(true);
    const quoteRes = await fetch("https://dummyjson.com/quotes/random");
    const quote = await quoteRes.json();
    setIsLoading(false);
    setQuote(quote);
  };
  
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      {isLoading ? (
        <AiOutlineLoading />
      ) : (
        <blockquote>
          <div>
            <FaQuoteLeft />
          </div>
          <div>
            <p>{quote.quote}</p>
            <p>- {quote.author}</p>
          </div>
        </blockquote>
      )}
      <Btn onClick={() => fetchQuote()}>
        Fetch Another One
      </Btn>
    </div>
  );
};
`}
    </CodeBlock>
  );
};

export const DataFetchingAxios = () => {
  return (
    <CodeBlock fileName="DataFetching.tsx">
      {`import axios from "axios";
import { useState, useEffect } from "react";

export const DataFetching = () => {
  const [quote, setQuote] = useState({
    author: "",
    id: 0,
    quote: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  
  const fetchQuote = async () => {
    setIsLoading(true);
    const quoteRes = await axios.get("https://dummyjson.com/quotes/random");
    const quote = quoteRes.data;
    setIsLoading(false);
    setQuote(quote);
  };
  
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      {isLoading ? (
        <AiOutlineLoading />
      ) : (
        <blockquote>
          <div>
            <FaQuoteLeft />
          </div>
          <div>
            <p>{quote.quote}</p>
            <p>- {quote.author}</p>
          </div>
        </blockquote>
      )}
      <Btn onClick={() => fetchQuote()}>
        Fetch Another One
      </Btn>
    </div>
  );
};
`}
    </CodeBlock>
  );
};
type quote = {
  id: number;
  quote: string;
  author: string;
};

export const DataFetching = () => {
  /* const [quote, setQuote] = useState<quote>({
    author: "",
    id: 0,
    quote: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const fetchQuote = async () => {
    setIsLoading(true);
    const quoteRes = await fetch("https://dummyjson.com/quotes/random");
    const quote = (await quoteRes.json()) as quote;
    setIsLoading(false);
    setQuote(quote);
  }; */

  const {
    data: [quote, error, isLoading],
    refetch: fetchQuote,
  } = useFetch<quote>("https://dummyjson.com/quotes/random");

  return (
    <div className="flex flex-col items-center justify-between md:max-w-[50%] h-fit gap-8 w-full">
      {isLoading ? (
        <AiOutlineLoading className="animate-spin dark:text-bodyDark text-bodyLight w-12 h-12" />
      ) : (
        <blockquote className="flex gap-4 w-full dark:text-bodyDark text-bodyLight min-h-12">
          <FaQuoteLeft className="w-12 h-12 flex-shrink-0" />
          <div className="space-y-4">
            <p className="p">{quote?.quote}</p>
            <p className="p font-semibold"> - {quote?.author}</p>
          </div>
        </blockquote>
      )}
      <Btn rectangle onClick={() => fetchQuote()}>
        Fetch Another One
      </Btn>
    </div>
  );
};
