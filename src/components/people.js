import React, { Component } from 'react';

class People extends Component {
  constructor(props){
    super(props);
    // console.log(`From People : ${JSON.stringify(this.props)}`);
    this.state = {
      people : []
    }
  }

  componentDidMount(){
    this.setState({people:this.props.people});
    // console.log(`From People : ${this.props.people}`);
  }

  componentDidUpdate(prevProps, prevState){
    // this.setState({people:this.props.people});
  }

  render() {
    const LoadingText = (
      <tr>
        <div className="ui inverted segment">
          <div className="ui active inverted loader"></div>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
      </tr>
    );
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
          {this.props.isLoading && LoadingText}
          {!this.props.isLoading && <>
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
          </>}
        </table>
      </>
    );
  }
}

export default People