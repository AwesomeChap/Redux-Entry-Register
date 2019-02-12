import React, {Component} from 'react';
import Select from './select';
import {Err1, Err2} from './errors';

class Form extends Component{
  constructor(props){
    super(props);
    // console.log('from Form : '+JSON.stringify(this.props));
    this.state = {
      name : '',
      email: '',
      department: null,
      course : null,
      isLoading: this.props.isLoading,
      saveStatus:this.props.saveStatus,
      name_err1: null,
      email_err1: null,
      department_err1: null,
      course_err1: null,
      email_err2: null,
    }
  }

  handleChange = e => {
    const {name,value} = e.target;
    this.setState({[name]:value});
  }

  handleSelect = (e) => {
    const selectedOption = e.target.value;
    const type = e.target.dataset.type;
    if(type === 'Department') this.setState({department:selectedOption});
    if(type === 'Course') this.setState({course:selectedOption});
    // console.log(`${type} : ${selectedOption}`);
  }

  isEmail = mail => {
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
      mail
    );
  };

  checkErr1 = (title) => {
    if(!title){
      return true;
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    const {name,email,department,course} = this.state;
    let {name_err1,email_err1,department_err1,course_err1,email_err2} = this.state;
    
    name_err1 = this.checkErr1(name);
    email_err1 = this.checkErr1(email);
    department_err1 = this.checkErr1(department);
    course_err1 = this.checkErr1(course);
    email_err2 = !this.isEmail(email);
    
    const noErr = !name_err1 && !department_err1 && !course_err1 && !email_err1 && !email_err2;
    
    if(noErr){
      console.log('submitted');

      const person = {name,email,department,course}
      this.props.onSavePeople(person);
      
      this.setState({
        name : '',
        email: '',
        department: '',
        course : '',
        isLoading: false,
        name_err1: null,
        email_err1: null,
        department_err1: null,
        course_err1: null,
        email_err2: null,
        toggleDep: true,
      },()=>{
        // console.log(this.state);
      })
    }else{
      this.setState({
        name_err1 : name_err1,
        email_err1: email_err1,
        department_err1: department_err1,
        course_err1: course_err1,
        email_err2: email_err2
      },()=>{
        console.log('not submitted');
      });
    }

    
  }
  
  render(){
    const departmentOptions = ['Core','Electives']
    const courseOptions = {
      Core : ["javascripting","git-it","Scope Chains & Closures","Elementary Electron","learnyounode","How to npm","stream-adventure","how-to-markdown"],
      Electives : [
        "Functional Javascript","Level Me Up Scotty!","ExpressWorks","Make Me Hapi","Promise It Won't Hurt","Async You","NodeBot Workshop","Going Native","Planet Proto",
        "WebGL Workshop","ESNext Generation","Test Anything","Tower of babel","learnyoumongo","regex-adventure","learn-sass","Pattern Lab Workshop","learnyoubash","Currying in JavaScript",
        "Shader School","Bytewiser","Bug Clinic","Browserify Adventure","Intro to WebGL","Count to 6","Kick off Koa","LololoDash","learnyoucouchdb","learnuv","Learn Generators",
        "learnyoureact","perfschool","Web Audio School","torrential","Thinking in React","Post-mortem debugging","Seneca in practice","LESS is more"
      ]
    }
    return(
      <form onSubmit={this.handleSubmit} className="ui form">
        <div className="two fields">
          <div className="field">
            <input onChange={this.handleChange} value={this.state.name} name="name" className="input-field" placeholder="Name" type="text"/>
            {this.state.name_err1 ? <Err1 name="Name"/> : ''}
          </div>
          <div className="field">
            <input onChange={this.handleChange} value={this.state.email} name="email" className="input-field" placeholder="Email" type="text" />
            {this.state.email_err1 ? <Err1 name="Email"/> : this.state.email_err2 ? <Err2 name="Email"/> : ''}
          </div>
        </div>
        <div className="two fields">
          <div className="field">
            <Select value={this.state.department} handleSelect={this.handleSelect} options={departmentOptions} type={'Department'}/>
            {this.state.department_err1 ? <Err1 name="Department"/> : ''}
          </div> 
          {this.state.department && <div className="field">
            <Select value={this.state.course} handleSelect={this.handleSelect} options={this.state.department === 'Core' ? courseOptions.Core : courseOptions.Electives} type={'Course'}/>
            {this.state.course_err1 ? <Err1 name="Course"/> : ''}
          </div>}
        </div>
        {this.props.saveStatus === 'READY' && (
          <button type="submit" className="ui red button">Submit</button>
        )}
        {this.props.saveStatus === 'SAVING' && (
          <button className="ui red button loading">Submit</button>
        )}
        {this.props.saveStatus === 'SAVED' && (
          <button className="ui red button">Saved!</button>
        )}
      </form>
    );
  }
}

export default Form;