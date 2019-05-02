import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
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




class UploadScreen extends Component {
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
    var uploadScreen =[];
      uploadScreen.push(<LoginScreen appContext={self.props.appContext} />);
      self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
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
          <GridListTile key={tile.userId}>
          <Card >
            <CardContent>
            <div class="table" >
            <div   class="row">
            <Typography  class="cell" color="textSecondary" gutterBottom>
              UserName of Student : {tile.userName}
            </Typography>
            <Typography  class="cell" color="textSecondary" gutterBottom>
              First Name : {tile.firstName}
            </Typography>
            <Typography  class="cell" color="textSecondary" gutterBottom>
              Last Name : {tile.lastName}
            </Typography>
            </ div>
            <div  class="row">
             <Typography  class="cell" color="textSecondary" gutterBottom>
              Email Address : {tile.emailId}
            </Typography>
            <Typography  class="cell" color="textSecondary" gutterBottom>
              Gender : {tile.gender}
            </Typography>
            <Typography  class="cell" color="textSecondary" gutterBottom>
              Diest Preference : {tile.dietPreference}
            </Typography>
            </div>
            <div  class="row">
            <Typography  class="cell" color="textSecondary" gutterBottom>
              Nationaliy : {tile.nationality}
            </Typography>
            </div>
            </div>
          </CardContent>
        </Card>
         
          </GridListTile>
        ))}
      </GridList>
      <Button class = "button" onClick={(event) => this.handleClick(event)}>Log Out</Button>
    </div>
  );
  }
}

export default UploadScreen;