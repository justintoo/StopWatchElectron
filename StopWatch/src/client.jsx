import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import GridLayout from 'react-grid-layout';

import Downloader from './Downloader.jsx';
import LeftSidebar from './LeftSidebar.jsx'
import MainContent from './MainContent.jsx'

const App = () => (
  <MuiThemeProvider>
    <div>
      <AppBar title="ROSE Installer" />
      <table>
          <tr>
            <td width="200px"><LeftSidebar /></td>
            <td><MainContent /></td>
          </tr>
      </table>
    </div>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
