import React, { Component } from "react";
import "./../styles.css";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import DirectionsRun from "@material-ui/icons/DirectionsRun";
import LiveHelp from "@material-ui/icons/LiveHelp";

class ClubAim extends Component {
  constructor(props) {
    super(props);
    this.state = { open1: true, open2: true, open3: true };
  }
  handleClick1 = () => {
    this.setState(state => ({ open1: !state.open1 }));
  };
  handleClick2 = () => {
    this.setState(state => ({ open2: !state.open2 }));
  };
  handleClick3 = () => {
    this.setState(state => ({ open3: !state.open3 }));
  };
  render() {
    return (
      <List
        component="nav"
        subheader={<ListSubheader component="h2">社團特色</ListSubheader>}
        className="listWrapper"
      >
        <ListItem button onClick={this.handleClick1}>
          <ListItemIcon>
            <LibraryBooks />
          </ListItemIcon>
          <ListItemText inset primary="課程相關" />
          {this.state.open1 ? <ExpandMore /> : <ExpandLess />}
        </ListItem>
        <Collapse in={this.state.open1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button>
              <ListItemText inset primary="社課" />
            </ListItem>
            <ListItem button>
              <ListItemText inset primary="讀書會" />
            </ListItem>
            <ListItem button>
              <ListItemText inset primary="社辦藏書" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={this.handleClick2}>
          <ListItemIcon>
            <DirectionsRun />
          </ListItemIcon>
          <ListItemText inset primary="活動相關" />
          {this.state.open2 ? <ExpandMore /> : <ExpandLess />}
        </ListItem>
        <Collapse in={this.state.open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button>
              <ListItemText inset primary="華佗營" />
            </ListItem>
            <ListItem button>
              <ListItemText inset primary="課前活動" />
            </ListItem>
            <ListItem button>
              <ListItemText inset primary="社遊" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={this.handleClick3}>
          <ListItemIcon>
            <LiveHelp />
          </ListItemIcon>
          <ListItemText inset primary="服務相關" />
          {this.state.open3 ? <ExpandMore /> : <ExpandLess />}
        </ListItem>
        <Collapse in={this.state.open3} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button>
              <ListItemText inset primary="服務隊" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    );
  }
}

export default ClubAim;
