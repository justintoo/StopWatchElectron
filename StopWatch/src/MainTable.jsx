import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const API = 'http://rosecompiler.org/edg_binaries/edg_binaries.txt';

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
class MainTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hits: [],
    };
  }

  componentDidMount() {
    const {ipcRenderer} = require('electron');
    ipcRenderer.send('download-edg-file', {'url': 'http://rosecompiler.org/edg_binaries/edg_binaries.txt'});
    ipcRenderer.on('downloaded-edg-file', (event, arg) => {
      console.log('Received EDG file from main')
      this.setState({ hits: arg })
    })
  }

  render() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Title</TableHeaderColumn>
          </TableRow>
        </TableHeader>
                <TableBody>
                  {this.state.hits.map(hit =>
                    <TableRow>
                      <TableRowColumn><a href={hit}>{hit}</a></TableRowColumn>
                    </TableRow>
                  )}
                </TableBody>
      </Table>
    );
    }
}

export default MainTable;
