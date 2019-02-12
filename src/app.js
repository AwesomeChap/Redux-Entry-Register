import React, { Component } from "react";
import Form from './components/form';
import People from './components/people';
import Header from './components/header';
import { connect } from 'react-redux';
import { FetchPeople, SavePeople } from './actions/actions';

const testData = [
  {
    name : 'abc',
    email : 'abc@gmail.com',
    department : 'Core',
    course : 'course-01'
  },
  {
    name : 'efg',
    email : 'efg@gmail.com',
    department : 'Core',
    course : 'course-02'
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   people: []
    // }
  }

  componentWillMount() {
    this.props.FetchPeople();
  }

  // componentDidMount(){
  //   const { people } = this.props;
  //   this.setState({ people: people });
  // }

  handleSave = (person) => {
    console.log('person received')
    this.setState((prevState) => {
      prevState.people.push(person);
      return {
        people: prevState.people
      }
    }, () => {
      this.props.SavePeople(this.state.people);
    })
  }

  render() {
    const { saveStatus, isLoading } = this.props;
    return (
      <>
        <div className="ui box grid centered">
          <div className="black row">
            <Header />
          </div>
          <div className="form-wrapper row">
            <div className="column">
              <Form
                saveStatus={saveStatus}
                isLoading={isLoading}
                people={this.props.people}
                onSavePeople={this.handleSave}
              />
            </div>
          </div>
          <div className="row">
            {/* <div className="column"> */}
              <People
                isLoading={isLoading}
                // people={testData}
                people={this.props.people}
                // people = {JSON.parse(localStorage.people)}
              />
            {/* </div> */}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log(`From Map : ${JSON.stringify(state)}`);
  return {
    saveStatus: state.saveStatus,
    isLoading: state.isLoading,
    people: state.people
  }
}

export default connect(mapStateToProps, { FetchPeople, SavePeople })(App);

// export default App;
