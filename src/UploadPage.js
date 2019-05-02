import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import UploadScreen from './UploadScreen';
import Pastfiles from './Pastfiles';
import ComplexGrid from './ComplexGrid'
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import RaisedButton from 'material-ui/RaisedButton';
import CardActionArea from '@material-ui/core/CardActionArea';
import axios from 'axios';
import LoginScreen from './Loginscreen';
import './App.css';




class UploadPage extends Component {
  constructor(props) {
    super(props);
    this.state = {draweropen: false,currentScreen:[]};
  }
  componentDidMount(){
    var currentScreen=[];
   // currentScreen.push(<UploadScreen appContext={this.props.appContext} role={this.props.role}/>);
    this.setState({currentScreen})
  }
  
   handleClick(event,acId,username,role){
    var self = this;
    if(role == "host"){
      console.log("acId"+acId);
    var payload={
      "user":{
      "userName":username
      },
      "accomodation":{
        "acId":acId,
        "username":username
      }
      
    }
    var apiBaseUrl = "http://localhost:8080/getStudentRequestsAgainstAccomodation";
    axios.post(apiBaseUrl, payload)
   .then(function (response) {
     console.log(response);
     var uploadScreen =[];
      uploadScreen.push(<UploadScreen appContext={self.props.appContext} role={self.state.role} data={response.data} username = {self.state.username}/>);
      self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
   })
   .catch(function (error) {
     console.log(error);
   });
    }else{
      console.log("acId"+acId);
      console.log("username"+username);
    var payload={
      "user":{
      "userName":username
      },
      "accomodation":{
        "acId":acId,
        "username":username
      }
      
    }
    var apiBaseUrl = "http://localhost:8080/requestAccomodationFromHost";
    axios.post(apiBaseUrl, payload)
   .then(function (response) {
     console.log(response);
     var loginPage =[];
      loginPage.push(<LoginScreen appContext={self.props.appContext}/>);
      self.props.appContext.setState({loginPage:loginPage,uploadScreen:[]})
   })
   .catch(function (error) {
     console.log(error);
   });
    }
     
    
  }
  render() {
    var buttonName = "Request Stay";
    if(this.props.role == "host"){
      buttonName = "See pending requests";
    }
    return (
    <div>
      <GridList cellHeight={180}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Accommodations Available</ListSubheader>
        </GridListTile>
        {this.props.data.map(tile => (
          <GridListTile key={tile.acId}>
          <Card >
            <CardContent>
            <div class="table" >
            <div   class="row">
            <Typography  class="cell" color="textSecondary" gutterBottom>
              Name of Host : {tile.username}
            </Typography>
            <Typography  class="cell" color="textSecondary" gutterBottom>
              Start Date : {tile.startDate}
            </Typography>
            <Typography  class="cell" color="textSecondary" gutterBottom>
              End Date : {tile.endDate}
            </Typography>
            </ div>
            <div  class="row">
             <Typography  class="cell" color="textSecondary" gutterBottom>
              Room mate preference : {tile.roommatePreference}
            </Typography>
            <Typography  class="cell" color="textSecondary" gutterBottom>
              Number of Rooms : {tile.noOfRooms}
            </Typography>
            <Typography  class="cell" color="textSecondary" gutterBottom>
              Number of BathRooms : {tile.noOfBathrooms}
            </Typography>
            </div>
            <div  class="row">
            <Typography  class="cell" color="textSecondary" gutterBottom>
              Address : {tile.address}
            </Typography>
            <Typography  class="cell" color="textSecondary" gutterBottom>
              Status : {tile.status}
            </Typography>
            <Typography  class="cell" color="textSecondary" gutterBottom>
              <Button class = "button" onClick={(event) => this.handleClick(event,tile.acId,this.props.username,this.props.role)}>{buttonName}</Button>
            </Typography>
            </div>
            </div>
          </CardContent>
        </Card>
         
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
  }
}

export default (UploadPage);
