import React, {Component} from 'react';

export default class Select extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log('mounted')
  }

  handleChange = (e) => {
    this.props.handleSelect(e);
  }

  render(){
    const options = this.props.options.map(option => (
      <option key={`key-${option}`} value={option}>{option}</option>
    ));
    return(
      <select 
        value={this.props.value} 
        data-type={this.props.type} 
        onChange={this.handleChange} 
        className="ui search selection inverted dropdown input-field"
      >
        <div className="text"></div>
        <option className="select-placeholder" value="select">Please Select {this.props.type}</option>
        {options}
      </select>
    );
  }
}

//type
//onChange
//options