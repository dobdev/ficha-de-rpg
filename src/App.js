import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
// import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
// import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InboxIcon from '@material-ui/icons/Inbox';
import MenuIcon from '@material-ui/icons/Menu';

import Character from '../src/components/containers/Character/Character'
import Teste from '../src/components/containers/Teste/Teste'
import logo from './logo.svg';
import './App.css';

const options = [
  'Salvar',
  'Limpar',
  'Sair'
];

const ITEM_HEIGHT = 48;

class App extends Component {
  constructor(){
    super();

    this.state = {
      left: false,
      anchorEl: null
    }
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              Ficha de RPG
            </Typography>
            <IconButton
              aria-label="More"
              aria-owns={anchorEl ? 'long-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <MoreVertIcon />
            </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: 200,
                  },
                }}
              >
                {options.map(option => (
                  <MenuItem key={option} selected={option === 'Pyxis'} onClick={this.handleClose}>
                    {option}
                  </MenuItem>
                ))}
              </Menu>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}>
            <List component="nav">
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon> 
                <ListItemText primary="Inbox" />
              </ListItem>
              <ListItem button>
                {/* <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon> */}
                <ListItemText primary="Drafts" />
              </ListItem>
            </List>
          </div>
        </Drawer>        
        <Character />
        {/* <Teste/> */}
      </div>
    );
  }
}

export default App;
