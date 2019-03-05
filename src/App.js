import React, { Component } from 'react';
import { ProductList } from './components/ProductList';
import { TimersDashBoard } from './components/TimersDashBoard';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ProductList/> */}
        <TimersDashBoard/>
      </div>
    );
  }
}

export default App;
