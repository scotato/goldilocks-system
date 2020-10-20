import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components'

import { lightTheme } from '../src/theme';
import { Button } from '../src/components/Button';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Button onClick={() => alert('🤖')}>Themed Go</Button>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
