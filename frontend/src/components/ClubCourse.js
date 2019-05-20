import React, { Component } from "react";
import "./../styles.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DateRange from "@material-ui/icons/DateRange";
import LocationOn from "@material-ui/icons/LocationOn";
import Title from "@material-ui/icons/Title";

class ClubCourse extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  componentDidMount() {
    this.getDataFromDb();
  }
  getDataFromDb = async () => {
    await fetch("http://localhost:3001/api/getCourses")
      .then(data => {
        return data.json();
      })
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.error(err));
  };
  render() {
    return (
      <Paper className="courseWrapper" elevation={15}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <DateRange className="iconDeco" />
                日期
              </TableCell>
              <TableCell align="right">
                <Title className="iconDeco" />
                社課主題
              </TableCell>
              <TableCell align="right">
                <LocationOn className="iconDeco" />
                社課地點
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(this.state.data).map((key, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {this.state.data[key].date}
                </TableCell>
                <TableCell align="right">
                  {this.state.data[key].topics}
                </TableCell>
                <TableCell align="right">{this.state.data[key].room}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default ClubCourse;
