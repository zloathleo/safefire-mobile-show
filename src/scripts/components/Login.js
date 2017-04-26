import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

import Animejs from 'animejs';
import '../css/login.css';

class Login extends React.Component {

    state = {
        login: true,
    };

    constructor(props) {
        super(props);
        this.mi
        this.doLogin = this.doLogin.bind(this);
        this.toRegister = this.toRegister.bind(this);
        this.toLogin = this.toLogin.bind(this);

        this.loginHiddenAnim = undefined;
    }

    componentDidMount() {
        let _duration = 800;
        this.loginHiddenAnim = Animejs({
            targets: this.loginForm,
            height: 0,
            opacity: [1, 0],
            duration: _duration,
            loop: false,
            autoplay: false,
            easing: 'easeInOutQuart',
            begin: function (anim) {
                let _div = anim.animatables[0].target;
                _div.style.overflow = 'hidden';
                _div.style.opacity = 1;
            },
            complete: function (anim) {
                let _div = anim.animatables[0].target;
                _div.style.display = 'none';
            },
        });

        this.registerShowAnim = Animejs({
            targets: this.registerForm,
            height: 280,
            opacity: [0, 1],
            duration: _duration,
            loop: false,
            autoplay: false,
            easing: 'easeInOutQuart',
            begin: function (anim) {
                let _div = anim.animatables[0].target;
                _div.style.overflow = 'hidden';
                _div.style.display = 'block';

            },
            complete: function (anim) {
                let _div = anim.animatables[0].target;
                _div.style.overflow = 'auto';
            },
        });

        this.loginShowAnim = Animejs({
            targets: this.loginForm,
            height: [0, 210],
            opacity: [0, 1],
            duration: _duration,
            loop: false,
            autoplay: false,
            easing: 'easeInOutQuart',
            begin: function (anim) {
                let _div = anim.animatables[0].target;
                _div.style.overflow = 'hidden';
                _div.style.opacity = 0;
                _div.style.display = 'block';
            },
            complete: function (anim) {
                let _div = anim.animatables[0].target;
                _div.style.overflow = 'auto';
            },
        });


        this.registerHiddenAnim = Animejs({
            targets: this.registerForm,
            height: [280, 0],
            opacity: [1, 0],
            duration: _duration,
            loop: false,
            autoplay: false,
            easing: 'easeInOutQuart',
            begin: function (anim) {
                let _div = anim.animatables[0].target;
                _div.style.overflow = 'hidden';
                _div.style.opacity = 1;
            },
            complete: function (anim) {
                let _div = anim.animatables[0].target;
                _div.style.display = 'none';
            },
        });
    }

    toLogin() {
        console.log('toLogin');
        this.loginShowAnim.restart();
        this.registerHiddenAnim.restart();
    }

    toRegister() {
        this.loginHiddenAnim.restart();
        this.registerShowAnim.restart();
    }

    doLogin(e) {
        //api 调用 Link
        this.loginLink.handleClick(e.nativeEvent);
        return false;
    }

    render() {
        return (
            <div className='login-fullcontainer'>
                <div className='login-page'>
                    <div className="form">
                        <div style={{ display: 'none', height: 0 }} ref={(ref) => this.registerForm = ref}>
                            <input type="text" placeholder="name" />
                            <input type="password" placeholder="password" />
                            <input type="text" placeholder="email address" />
                            <button>create</button>
                            <p className="message" onClick={this.toLogin}>Already registered? <a href="#">Sign In</a></p>
                        </div>
                        <div ref={(ref) => this.loginForm = ref}>
                            <input type="text" placeholder="username" ref={(ref) => this.loginName = ref} />
                            <input type="password" placeholder="password" ref={(ref) => this.loginPassword = ref} />
                            <button onClick={this.doLogin} >login</button>
                            {/*链接Link*/}
                            <Link ref={(ref) => this.loginLink = ref} to={"main/overview"}></Link>
                            <p className="message" onClick={this.toRegister}>Not registered? <a href="#">Create an account</a></p>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;