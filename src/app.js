import React, { Component } from "react";
import Form from './components/form';
import People from './components/people';
import Header from './components/header'


class App extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
  }
  
  render() {
    return (
      <>
        <div className="ui box grid centered">
          <div className="row">
            <div className="black column">
              <Header />
            </div>
          </div>
          <div className="form-wrapper row">
            <div className="column">
              <Form />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <People />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
