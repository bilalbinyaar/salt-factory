import React from 'react';
import QuoteBanner from '../components/quote/QuoteBanner';
import QuoteForm from '../components/quote/QuoteForm';

const GetQuote = () => {
  return (
    <React.Fragment>
      <QuoteBanner />
      <QuoteForm />
    </React.Fragment>
  );
};

export default GetQuote;
