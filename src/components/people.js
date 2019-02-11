import React, { Component } from 'react';
import {connect} from 'react-redux';
import {FetchPeople} from '../actions/actions';

class People extends Component {
  constructor(props){
    super(props);
    this.state = {
      people : []
    }
  }

  componentDidMount(){
    this.setState({people:this.props.people});
  }

  render() {
    const defaultText = (
      <tr>
        <td className="center aligned" colSpan="4" >Be the first person to get registered!</td>
      </tr>
    );
    const people = this.state.people.map(person => {
      const {name,email,department,course} = person;
      return(
        <tr>
          <td>{name}</td>
          <td>{email}</td>
          <td>{department}</td>
          <td>{course}</td>
        </tr>
      );
    });
    return (
      <>
        <pre></pre>
        <h2 className="custom-header" >People</h2>
        <table className="ui striped celled selectable red inverted table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Course</th>
            </tr>
          </thead>
          <tbody>
            {this.state.people.length ? people : defaultText }
          </tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = state => ({
  people : state.people
});

export default connect(mapStateToProps,{FetchPeople})(People);