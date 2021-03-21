import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './App';
import { IntlProvider } from 'react-intl';
import { LocaleHelper } from '../utils/LocaleHelper';
import { I18NHelper } from '../utils/I18NHelper';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom';

// Switch the selected language here.. It will take care rendering the whole application with new selected language.
const userLocale: string = LocaleHelper.getUserLangugeCode();

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider messages={I18NHelper.getMessages()} locale={userLocale} defaultLocale={LocaleHelper.defaultLanguageCode()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('cropdarpan_root')
);

