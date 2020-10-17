import React, { Component } from 'react';
import './Timer.css';
import Grid from '@material-ui/core/Grid';
import TimerButton from '../TimerButton/TimerButton';

class Timer extends Component<{}, {seconds:number , minutes:number, isOn:boolean , myInterval:NodeJS.Timer}> {
  constructor(props:any) {
    super(props);
    this.state = {
      minutes: 0,
      seconds: 0,
      isOn: false,
      myInterval:setInterval(()=>{},1000)
    };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer() {
    if (this.state.isOn === true) {
      return;
    }
    let {myInterval}=this.state;
    myInterval= setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > -1) {
        this.setState(({ seconds }) => ({
          seconds: seconds + 1,
        }));
      }
      if (seconds === 59) {
        if (minutes === 59) {
          clearInterval(myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes + 1,
            seconds: 0,
          }));
        }
      }
    }, 1000);
    this.setState({myInterval})
    this.setState({ isOn: true });
  }

  stopTimer() {
    const {myInterval}=this.state;
    clearInterval(myInterval);
    this.setState({ isOn: false });
  }

  resetTimer() {
    this.stopTimer();
    this.setState({
      minutes: 0,
      seconds: 0,
    });
  }

  render = () => {
    const { minutes, seconds } = this.state;

    return (
        <Grid container spacing={0}>
          <Grid item xs={12} sm={8} md={5} className={"center"}>
          <h1>Stop Watch</h1>
            <div className="timer-container">
              <Grid item xs={8} sm={6} style={{margin:"auto"}}>
                <h1 style={{fontSize:"100px"}}>{minutes <10 ? `0${minutes}`:minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
              </Grid>
              <Grid item xs={12} sm={12} style={{marginLeft:"50px"}}>
                  <TimerButton
                    className="start-timer"
                    buttonAction={this.startTimer}
                    buttonValue={'Start'}
                  />
                  <TimerButton
                    className="stop-timer"
                    buttonAction={this.stopTimer}
                    buttonValue={'Stop'}
                  />
                  <TimerButton
                    className="reset-timer"
                    buttonAction={this.resetTimer}
                    buttonValue={'Reset'}
                  />
              </Grid>
              </div>
            </Grid>
        </Grid>
    );
  };
}

export default Timer