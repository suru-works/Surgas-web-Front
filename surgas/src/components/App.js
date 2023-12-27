import React from 'react';
import Header from './base/Header';
import Home from './specific/HomeComponent/Home';
import ContactUs from './specific/ContactUsComponent/ContactUs';
import Products from './specific/ProductsComponent/Products';
import Footer from './base/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { SPANISH, ENGLISH } from "../languages/languages"
import esTranslations from '../languages/strings.es.json';
import enTranslations from '../languages/strings.en.json';
import { useSelector } from "react-redux";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';

const getMessages = (locale) => {
  switch (locale) {
    case ENGLISH:
      return enTranslations;
    default:
      return esTranslations;
  }
}

function App() {
  const locale = useSelector((state) => state.language.languaje);

  return (
      <IntlProvider locale={locale} defaultLocale={SPANISH} messages={getMessages(locale)}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </IntlProvider>
  );
}

export default App;