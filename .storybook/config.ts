import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { DocsPage } from 'storybook-addon-deps/blocks';
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { theme } from '@';
// import { GlobalStyle } from '@';

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.(js|ts)x?$/), module);

addParameters({
  options: {
    showRoots: true,
  },
  docs: { page: DocsPage },
  dependencies: { 
    //display only dependencies/dependents that have a story in storybook
    //by default this is false
    withStoriesOnly: true,

    //completely hide a dependency/dependents block if it has no elements
    //by default this is false
    hideEmpty: true,
  }
});

addDecorator(withA11y);
addDecorator(withThemesProvider([theme]));
// addDecorator(story => (
//   <>
//     // <GlobalStyle />
//     {story()}
//   </>
// ));
