import React, { Component } from 'react';


// import Home from './pages/componentTest/Home';
// import Header from './pages/componentTest/Layout';
// import Counter from './pages/Counter/CounterAccordion';
// import SimpleSlider from './pages/componentTest/SimpleSlider';
import MaterialButton from './pages/componentTest/MaterialButton';
import FooterTest from './pages/componentTest/FooterTest';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MaterialButton />
        {/* <SimpleSlider /> */}
        <FooterTest />
      </div>
    );
  }
}

export default App;
