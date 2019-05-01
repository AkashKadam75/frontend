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
  
  handleMenuClick(event,page){
   
  }
  render() {
    return (
    <div>
      <GridList cellHeight={180}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Accommodations Available</ListSubheader>
        </GridListTile>
        {this.props.data.map(tile => (
          <GridListTile key={tile.acId}>
          <Card className="blue-background">
            <CardContent>
            <Typography  color="textSecondary" gutterBottom>
              Name of Host : {tile.username}
            </Typography>
            <Typography  color="textSecondary" gutterBottom>
              Start Date : {tile.startDate}
            </Typography>
            <Typography  color="textSecondary" gutterBottom>
              End Date : {tile.endDate}
            </Typography>
            <Typography  color="textSecondary" gutterBottom>
              Room mate preference : {tile.roommatePreference}
            </Typography>
            <Typography  color="textSecondary" gutterBottom>
              Number of Rooms : {tile.noOfRooms}
            </Typography>
            <Typography  color="textSecondary" gutterBottom>
              Address : {tile.address}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Request Stay</Button>
          </CardActions>
        </Card>
            
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
  }
}

export default (UploadPage);
