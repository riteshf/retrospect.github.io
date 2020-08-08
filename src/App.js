import React from 'react';
import logo from './logo.svg';
import {App, AppHeader, AppLogo, AppLink} from './App.styled';

export const Root =() => {
  return (
    <App>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AppLink
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </AppHeader>
    </App>
  );
}

export default Root;
