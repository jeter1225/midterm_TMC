import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./../styles.css";
import Header from "./Header";
import HomePage from "./HomePage";
import ClubAim from "./ClubAim";
import ClubFeature from "./ClubFeature";
import ClubCourse from "./ClubCourse";
import ClubCampInfo from "./ClubCampInfo";

class Site extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{ width: "100%" }}>
          <Switch>
            <Route exact path="/" component={() => <HomePage />} />
            <Route exact path="/aim" component={() => <ClubAim />} />
            <Route exact path="/feature" component={() => <ClubFeature />} />
            <Route exact path="/course" component={() => <ClubCourse />} />
            <Route exact path="/campInfo" component={() => <ClubCampInfo />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Site;
