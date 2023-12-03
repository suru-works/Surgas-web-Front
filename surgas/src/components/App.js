import '../styles/App.css';
import Header from './base/Header';
import Home from './specific/HomeComponent/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { SPANISH, ENGLISH } from "../languages/languages"
import esTranslations from '../languages/strings.es.json';
import enTranslations from '../languages/strings.en.json';
import  store  from "../redux/store";
import { useSelector } from "react-redux";

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
    <div className="App">
      <IntlProvider locale={locale} defaultLocale={SPANISH} messages={getMessages(locale)}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </IntlProvider>
    </div>
  );
}

export default App;