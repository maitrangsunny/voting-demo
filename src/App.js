import React, { Component } from 'react';
import { ProductList } from './components/ProductList';
import {TimeList} from './components/TimeList';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ProductList/> */}
        <TimeList/>
      </div>
    );
  }
}

export default App;
