import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./../styles.css";
import HeaderButton from "./HeaderButton";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  componentDidMount() {
    this.getDataFromDb();
  }
  getDataFromDb = async () => {
    await fetch("http://localhost:3001/api/getNavigations")
      .then(data => {
        return data.json();
      })
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.error(err));
  };
  render() {
    return (
      <div className="flexContent">
        <h1 className="headerstyle">
          <NavLink to={"/"}>傳統醫學研究社</NavLink>
        </h1>
        <div className="headerButton">
          {Object.keys(this.state.data).map((key, index) => (
            <div key={index}>
              <HeaderButton
                text={this.state.data[key].heads}
                url={this.state.data[key].url}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Header;
