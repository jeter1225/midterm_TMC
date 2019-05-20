import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class ClubAim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    this.getDataFromDb();
  }
  getDataFromDb = async () => {
    await fetch("http://localhost:3001/api/getAims")
      .then(data => {
        return data.json();
      })
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.error(err));
  };
  render() {
    return (
      <div className="aimWrapper">
        <img
          className="aimItem printImg"
          src={require("./img/clubPrint.png")}
          alt=""
        />
        <Paper elevation={15} className="aimItem paperStyle">
          <Typography variant="h3" component="h1" className="typoTitle">
            社團宗旨
          </Typography>
          {Object.keys(this.state.data).map((key, index) => (
            <Typography variant="h5" className="typoDetail" key={index}>
              {this.state.data[key].description}
            </Typography>
          ))}
        </Paper>
      </div>
    );
  }
}

export default ClubAim;
