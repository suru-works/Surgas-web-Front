import React from 'react';
import Header from './base/Header';
import Home from './specific/HomeComponent/Home';
import ContactUs from './specific/ContactUsComponent/ContactUs';
import Products from './specific/ProductsComponent/Products';
import Footer from './base/Footer';
import { BrowserRouter, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import languajes from "../languages/languages.json"
import esTranslations from '../languages/strings.es.json';
import enTranslations from '../languages/strings.en.json';
import { useSelector } from "react-redux";
import Portal from './reusable/Portal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
import FloatingButton from './reusable/FloatingButton';

const getMessages = (locale) => {
  switch (locale) {
    case languajes.english:
      return enTranslations;
    default:
      return esTranslations;
  }
}

const AppContent = () => {

  const location = useLocation();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Outlet />
      <Footer />
      {location.pathname === '/products' && ( // Renderiza el botón solo en la ruta '/products'
        <Portal container={document.body}>
          {/* Código del botón flotante aquí */}
          <FloatingButton>
            <FontAwesomeIcon icon={faPlus} />
          </FloatingButton>
        </Portal>
      )}
    </>
  );
}

function App() {
  const locale = useSelector((state) => state.language.languaje);

  return (
    <IntlProvider locale={locale} defaultLocale={languajes.spanish} messages={getMessages(locale)}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;