import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Login from './Login';

class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      userName:'',
      password:'',
      firstName:'',
      lastName:'',
      emailId:'',
      gender:'',
      nationality:'',
      dietPreference:'',
      startDate:'2019-05-02',
      endDate:'2019-05-02',
      roommatePreference:'',
      noOfRooms:'',
      noOfBathrooms:'',
      address:''
    }
  }
  componentWillReceiveProps(nextProps){
    console.log("nextProps",nextProps);
  }
  handleClick(event,role){
    var apiBaseUrl = "http://localhost:8080";
    console.log("values in register handler",this.state.startDate);
    var self = this;
    //To be done:check for empty values before hitting submit
    if(this.state.firstName.length>0){
      var payload={
      "user":{
      "userName":this.state.userName,
      "password":this.state.password,
      "firstName":this.state.firstName,
      "lastName":this.state.lastName,
      "emailId":this.state.emailId,
      "gender":this.state.gender,
      "nationality":this.state.nationality,
      "dietPreference":this.state.dietPreference,
      "userType":role
      },
      "accomodation":{
        "startDate":this.state.startDate,
        "endDate":this.state.endDate,
        "roommatePreference":this.state.roommatePreference,
        "noOfRooms":this.state.noOfRooms,
        "noOfBathrooms":this.state.noOfBathrooms,
        "address":this.state.address,
        "userType":role,
        "username":this.state.userName
      }
      }
      axios.post(apiBaseUrl+'/register', payload)
     .then(function (response) {
       console.log(response);
       if(response.status === 200){
        //  console.log("registration successfull");
         var loginscreen=[];
         loginscreen.push(<Login parentContext={this} appContext={self.props.appContext} role={role}/>);
         var loginmessage = "Not Registered yet.Go to registration";
         self.props.parentContext.setState({loginscreen:loginscreen,
         loginmessage:loginmessage,
         buttonLabel:"Register",
         isLogin:true
          });
       }
       else{
         console.log("some error ocurred",response.data.code);
       }
     })
     .catch(function (error) {
       console.log(error);
     });
    }
    else{
      alert("Input field value is missing");
    }

  }
  render() {
    console.log("props",this.props.role);
    if(this.props.role === 'host'){
      return (
      <div>
        <MuiThemeProvider >
          <div>
          <AppBar
             title="Register"
           />
           <div className="rowC">
           <div>
           <TextField
             hintText="Enter your UserName"
             floatingLabelText="username"
             onChange = {(event,newValue) => this.setState({userName:newValue})}
             inputProps={{
              style: { textAlign: "right" }
            }}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             onChange = {(event,newValue) => this.setState({firstName:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             onChange = {(event,newValue) => this.setState({lastName:newValue})}
             />
           <br/>
            <TextField
             hintText="Enter your Email Address"
             floatingLabelText="email address"
             onChange = {(event,newValue) => this.setState({emailId:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Gender"
             floatingLabelText="gender"
             onChange = {(event,newValue) => this.setState({gender:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Nationality"
             floatingLabelText="nationality"
             onChange = {(event,newValue) => this.setState({nationality:newValue})}
             />
           <br/>
           </div>
           <div>
           <TextField
             hintText="Enter your Dietary Preference"
             floatingLabelText="dietary preference"
             onChange = {(event,newValue) => this.setState({dietPreference:newValue})}
             />
           <br/>
           <TextField
              id="date"
              label="StartDate"
              type="date"
              defaultValue="2019-05-02"
              onChange = {(event,newValue) => this.setState({startDate:newValue})}
            />
            <br/>
            <TextField
              id="date"
              label="EndDate"
              type="date"
              defaultValue="2019-05-02"
              onChange = {(event,newValue) => this.setState({endDate:newValue})}
            />
            <br/>
           <TextField
             hintText="Enter your Roommate Preference"
             floatingLabelText="roommate preference"
             onChange = {(event,newValue) => this.setState({roommatePreference:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter Number of Rooms"
             floatingLabelText="number of rooms"
             onChange = {(event,newValue) => this.setState({noOfRooms:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter Number of BathRooms"
             floatingLabelText="number of bathrooms"
             onChange = {(event,newValue) => this.setState({noOfBathrooms:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Address"
             floatingLabelText="enter address"
             onChange = {(event,newValue) => this.setState({address:newValue})}
             />
           <br/>
           </div>
           </div>
           <div className="center-align">
            <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event,this.props.role)}/>
           </div>
          </div>
         </MuiThemeProvider>
      </div>
    );
    }else{
      return (
      <div>
        <MuiThemeProvider >
          <div>
          <AppBar
             title="Register"
           />
           <div className="rowC">
           <div>
           <TextField
             hintText="Enter your UserName"
             floatingLabelText="username"
             onChange = {(event,newValue) => this.setState({userName:newValue})}
             inputProps={{
              style: { textAlign: "right" }
            }}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             onChange = {(event,newValue) => this.setState({firstName:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             onChange = {(event,newValue) => this.setState({lastName:newValue})}
             />
           <br/>
            <TextField
             hintText="Enter your Email Address"
             floatingLabelText="email address"
             onChange = {(event,newValue) => this.setState({emailId:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Gender"
             floatingLabelText="gender"
             onChange = {(event,newValue) => this.setState({gender:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Nationality"
             floatingLabelText="nationality"
             onChange = {(event,newValue) => this.setState({nationality:newValue})}
             />
           <br/>
           </div>
           <div>
           <TextField
             hintText="Enter your Dietary Preference"
             floatingLabelText="dietary preference"
             onChange = {(event,newValue) => this.setState({dietPreference:newValue})}
             />
           <br/>
           <TextField
              id="date"
              label="StartDate"
              type="date"
              defaultValue="2019-05-02"
              onChange = {(event,newValue) => this.setState({startDate:newValue})}
            />
            <br/>
            <TextField
              id="date"
              label="EndDate"
              type="date"
              defaultValue="2019-05-02"
              onChange = {(event,newValue) => this.setState({endDate:newValue})}
            />
            <br/>
           <TextField
             hintText="Enter your Roommate Preference"
             floatingLabelText="roommate preference"
             onChange = {(event,newValue) => this.setState({roommatePreference:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter Number of Rooms"
             floatingLabelText="number of rooms"
             onChange = {(event,newValue) => this.setState({noOfRooms:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter Number of BathRooms"
             floatingLabelText="number of bathrooms"
             onChange = {(event,newValue) => this.setState({noOfBathrooms:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Another Address"
             floatingLabelText="enter address"
             onChange = {(event,newValue) => this.setState({address:newValue})}
             />
           <br/>
           </div>
           </div>
           <div className="center-align">
            <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event,this.props.role)}/>
           </div>
          </div>
         </MuiThemeProvider>
      </div>
    );
    }
  }
}

const style = {
  margin: 15,
};

export default Register;
