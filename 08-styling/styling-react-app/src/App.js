import React from 'react';
import './App.css';
import './App.scss';
import styles from './App.module.css';
import styled from 'styled-components';
import { Button } from '@mui/material';

const InlineStyles = () => {
  const inlineStyle = {
    color: 'blue',
    fontSize: '16px',
  };

  return (
    <div>
      <h2>Inline Styles</h2>
      <p style={inlineStyle}>This is styled with inline CSS.</p>
    </div>
  );
};

const CSSModules = () => {
  return (
    <div>
      <h2>CSS Modules</h2>
      <p className={styles['App-module']}>>This is styled with CSS Modules.</p>
    </div>
  );
};

const SASSExample = () => {
  return (
    <div>
      <h2>SASS (SCSS)</h2>
      <p className="App-sass">This is styled with SASS.</p>
    </div>
  );
};

const SCButton = styled.button`
  background-color: purple;
  color: white;
  font-size: 16px;
`;

const StyledComponents = () => {
  return (
    <div>
      <h2>Styled Components</h2>
      <SCButton>This is styled with Styled Components</SCButton>
    </div>
  );
};

const MaterialUIButton = () => {
  return (
    <div>
      <h2>Material UI</h2>
      <Button variant="contained" color="primary">
        This is styled with Material UI
      </Button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Styling in React</h1>
      <InlineStyles />
      <CSSModules />
      <SASSExample />
      <StyledComponents />
      <MaterialUIButton />
    </div>
  );
}

export default App;
