import React, { Component } from 'react';

class People extends Component {
  constructor(props){
    super(props);
    // console.log(`From People : ${JSON.stringify(this.props)}`);
    // this.state = {
    //   people : []
    // }
  }

  // componentDidMount(){
  //   this.setState({people:this.props.people});
  //   // console.log(`From People : ${this.props.people}`);
  // }

  // componentWillReceiveProps(update){
  //   this.setState({people:update.people});
  // }

  render() {
    const LoadingText = (
      <tr>
        <div class="ui inverted red segment">
          <div class="ui active fluid placeholder">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </div>
      </tr>
      // <tr>
      //   <div className="ui inverted segment">
      //     <div className="ui active inverted loader"></div>
      //     <br/>
      //     <br/>
      //     <br/>
      //     <br/>
      //   </div>
      // </tr>
    );
    const defaultText = (
      <tr>
        <td className="center aligned" colSpan="4" >Be the first person to get registered!</td>
      </tr>
    );
    const people = this.props.people.map(person => {
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
          {this.props.isLoading ? LoadingText : (
            <>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Course</th>
              </tr>
            </thead>
            <tbody>
              {this.props.people.length ? people : defaultText }
            </tbody>
            </>
          )}
        </table>
      </>
    );
  }
}

export default People