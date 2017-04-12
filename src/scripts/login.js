import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

import './css/login.css';

class LoginComp extends React.Component {
 
    constructor(props) {
        super(props);
        this.doLogin = this.doLogin.bind(this);
        this.changeForm = this.changeForm.bind(this);
    }

    changeForm() {
        //   $("div[class$='-form']").animate({ height: "toggle", opacity: "toggle" }, "slow"); 
        $(this.registerForm).animate({ height: "toggle", opacity: "toggle" }, "slow");
        $(this.loginForm).animate({ height: "toggle", opacity: "toggle" }, "slow");
    }

    doLogin() {
        console.log(this.loginName.value);
        window.location = 'main.html';
        return false;
    }


    render() {
        return (
            <div className="form">
                <div className="register-form" ref={(ref) => this.registerForm = ref}>
                    <input type="text" placeholder="name" />
                    <input type="password" placeholder="password" />
                    <input type="text" placeholder="email address" />
                    <button>create</button>
                    <p className="message" onClick={this.changeForm}>Already registered? <a href="#">Sign In</a></p>
                </div>
                <div className="login-form" ref={(ref) => this.loginForm = ref}>
                    <input type="text" placeholder="username" ref={(ref) => this.loginName = ref} />
                    <input type="password" placeholder="password" ref={(ref) => this.loginPassword = ref} />
                    <button onClick={this.doLogin}>login</button>
                    <p className="message" onClick={this.changeForm}>Not registered? <a href="#">Create an account</a></p>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<LoginComp />, document.getElementById('root'));
