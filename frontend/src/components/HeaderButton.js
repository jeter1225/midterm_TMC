import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./../styles.css";
import Button from "@material-ui/core/Button";

class HeaderButton extends Component {
  render() {
    return (
      <NavLink to={"/" + this.props.url}>
        <Button size="large">
          <h5>{this.props.text}</h5>
        </Button>
      </NavLink>
    );
  }
}

export default HeaderButton;
