import React, { Component } from "react";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [{}] };
  }
  componentDidMount() {
    this.getDataFromDb();
  }
  getDataFromDb = async () => {
    await fetch("http://localhost:3001/api/getHomepages")
      .then(data => {
        return data.json();
      })
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.error(err));
  };

  render() {
    return (
      <div className="bg">
        <div className="homepageContent">
          <img className="logo" src={require("./img/logo.png")} alt="" />
          <div>
            <ul className="information">
              {Object.keys(this.state.data[0]).map((key, index) =>
                key !== "_id" ? (
                  <li key={index}>
                    <b>{key} : </b>
                    {this.state.data[0][key]}
                  </li>
                ) : (
                  <li key={index} />
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
