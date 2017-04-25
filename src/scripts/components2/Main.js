import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import Overview from "./Overview";
import Analyze from "./Analyze";

import { AppBar, Drawer, MenuItem, Paper, IconButton } from 'material-ui';

//material-ui bug
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import DrawerContent from "./DrawerContent"

//icon
import IconArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#88014F',
    textColor: '#ffffff',
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


class Main extends React.Component {

  state = {
    open: false,
    title: 'Overview',
  };

  constructor(props) {
    super(props);

    this.handleCollapse = this.handleCollapse.bind(this);
    // this.doLogout = this.doLogout.bind(this);
    this.handleChangeDrawerItem = this.handleChangeDrawerItem.bind(this);


  }

  handleCollapse() {
    this.setState({ open: !this.state.open });
  }

  doLogout(e) {
    window.location = '/';
    // this.logoutLink.handleClick(e.nativeEvent);
    return false;
  }

  handleChangeDrawerItem(_key, _nativeEvent) {
    //改变页
    console.log('handleChangeDrawerItem');


    if (_key == 'Overview') {
      this.overviewLink.handleClick(_nativeEvent);
    } else if (_key == 'Analyze') {
      this.analyzeLink.handleClick(_nativeEvent);
    }
        this.setState({ open: false, title: _key });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            title={this.state.title}
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
            }}>
            <DrawerContent handleChangeDrawerItem={this.handleChangeDrawerItem} />
          </Drawer>

          <Router  >
            <div>
              <Route path='/main/overview' component={Overview} />
              <Route path='/main/analyze' component={Analyze} />

              <Link ref={(ref) => this.overviewLink = ref} to="/main/overview" />
              <Link ref={(ref) => this.analyzeLink = ref} to="/main/analyze" /> 

            </div>
          </Router >


        </div>
      </MuiThemeProvider >
    );
  }
}

export default Main;
