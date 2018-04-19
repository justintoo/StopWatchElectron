import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

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
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }


  render() {
    const { hits } = this.state;
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Title</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {hits.map(hit =>
            <TableRow>
              <TableRowColumn><a href={hit.url}>{hit.title}</a></TableRowColumn>
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
    }
}

export default MainTable;
