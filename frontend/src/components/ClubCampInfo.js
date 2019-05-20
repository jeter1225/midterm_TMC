import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PersonAdd from "@material-ui/icons/PersonAdd";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

class ClubCampInfo extends Component {
  state = {
    id: "",
    open: false,
    value: "",
    disabled: true,
    name: "",
    phone: "",
    personid: "",
    birth: "",
    school: ""
  };
  postDataToDB = async () => {
    let data = {
      name: this.state.name,
      phone: this.state.phone,
      personId: this.state.personid,
      birth: this.state.birth,
      school: this.state.school,
      foodPrefer: this.state.value
    };
    await fetch("http://localhost:3001/api/postInfo", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res.json();
      })
      .catch(err => console.error(err));
  };
  updateName = async evt => {
    await this.setState({
      name: evt.target.value
    });
  };
  updatePhone = async evt => {
    await this.setState({
      phone: evt.target.value
    });
  };
  updatepersonId = async evt => {
    await this.setState({
      personid: evt.target.value
    });
  };
  updateBirth = async evt => {
    await this.setState({
      birth: evt.target.value
    });
  };
  updateSchool = async evt => {
    await this.setState({
      school: evt.target.value
    });
  };
  buttonAble = () => {
    this.setState({
      disabled: false
    });
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.postDataToDB();
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
    this.buttonAble();
  };

  render() {
    return (
      <div className="aimWrapper">
        <img
          className="infoItem posterImg"
          src={require("./img/campPoster.jpg")}
          alt=""
        />
        <Paper elevation={15} className="infoItem paperStyle1">
          <Typography variant="h3" component="h1" className="typoTitle">
            華佗營資訊
          </Typography>
          <Typography variant="subtitle1" className="typoDetail">
            主辦單位：臺灣大學傳統醫學研究社
          </Typography>
          <Typography variant="subtitle1" className="typoDetail">
            時間：2018/01/31 ~ 2018/02/04
          </Typography>
          <Typography variant="subtitle1" className="typoDetail">
            報名資格：全國高中職學生
          </Typography>
          <Typography variant="subtitle1" className="typoDetail">
            活動費用：6500元
          </Typography>
          <Typography variant="subtitle1" className="typoDetail">
            <Button
              variant="contained"
              color="secondary"
              className="buttonDeco"
              onClick={this.handleClickOpen}
            >
              我要報名
              <PersonAdd className="buttonIcon" />
            </Button>
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">報名表單</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  對我們營隊有興趣嗎 趕快填完以下的報名資訊吧
                </DialogContentText>
                <TextField
                  required
                  autoFocus
                  margin="normal"
                  label="中文姓名"
                  fullWidth
                  variant="outlined"
                  value={this.state.name}
                  onChange={this.updateName}
                />
                <TextField
                  required
                  autoFocus
                  margin="normal"
                  label="手機電話"
                  fullWidth
                  variant="outlined"
                  value={this.state.phone}
                  onChange={this.updatePhone}
                />
                <TextField
                  required
                  autoFocus
                  margin="normal"
                  label="身分證字號"
                  fullWidth
                  variant="outlined"
                  value={this.state.personid}
                  onChange={this.updatepersonId}
                />
                <TextField
                  required
                  type="date"
                  autoFocus
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  value={this.state.birth}
                  onChange={this.updateBirth}
                />
                <TextField
                  required
                  autoFocus
                  margin="normal"
                  label="學校"
                  fullWidth
                  variant="outlined"
                  value={this.state.school}
                  onChange={this.updateSchool}
                />
                <FormControl component="fieldset">
                  <FormLabel component="legend">食物偏好</FormLabel>
                  <RadioGroup
                    value={this.state.value}
                    onChange={this.handleChange}
                  >
                    <FormControlLabel
                      value="葷"
                      control={<Radio color="primary" />}
                      label="葷"
                    />
                    <FormControlLabel
                      value="素"
                      control={<Radio color="primary" />}
                      label="素"
                    />
                  </RadioGroup>
                </FormControl>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  取消
                </Button>
                <Button
                  onClick={this.handleClose}
                  color="primary"
                  disabled={this.state.disabled}
                >
                  確認送出
                </Button>
              </DialogActions>
            </Dialog>
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default ClubCampInfo;
