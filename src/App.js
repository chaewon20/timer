import React from 'react';
import Page from './Page';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    background-color: darkcyan;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Page />
    </>
  );
}

export default App;
