import React from 'react';
import ReactDOM from 'react-dom';

import { AppBar, Drawer, MenuItem, Paper, IconButton } from 'material-ui';

//material-ui bug
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MyDrawerContent from "./components/MyDrawerContent"
import MyIndexContent from "./components/MyIndexContent"

//icon
import IconArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    // primary1Color: '#88014F',
    primary1Color: '#88014F',
    // primary2Color: _colors.cyan700,
    // primary3Color: _colors.grey400,
    // accent1Color: _colors.pinkA200,
    // accent2Color: _colors.grey100,
    // accent3Color: _colors.grey500,
    textColor: '#ffffff',
    // secondaryTextColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.54),
    // alternateTextColor: '#303030',
    // canvasColor: '#333333',
    // borderColor: _colors.grey300,
    // disabledColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.3),
    // pickerHeaderColor: _colors.cyan500,
    // clockCircleColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.07),
    // shadowColor: _colors.fullBlack
  }
});

const styles = {
  paper: {
    flex: 1,
    height: '100%',
    margin: 10,
    textAlign: 'center',
    padding: 10
  }
};


class MainAppBar extends React.Component {

  state = {
    open: false,
  };

  constructor(props) {
    super(props);

    this.handleCollapse = this.handleCollapse.bind(this);
  }

  handleCollapse() {
    this.setState({ open: !this.state.open });
  }

  doLogout() {
    window.location = 'login.html';
    return false;
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            title="Overview"
            style={{ background: 'linear-gradient(60deg, #AD1457, #880E4F)' }}//背景渐变
            onLeftIconButtonTouchTap={this.handleCollapse}
            iconElementRight={<IconButton onClick={this.doLogout}><IconArrowForward /></IconButton>}
          >
          </AppBar>

          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({ open })}
            containerStyle={{
              background: '#333333',
            }}
          >
            <MyDrawerContent />
          </Drawer>
 
          <MyIndexContent />

        </div>
      </MuiThemeProvider >
    );
  }
}


ReactDOM.render(<MainAppBar />, document.getElementById('root'));
