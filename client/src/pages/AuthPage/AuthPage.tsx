import React from 'react';

import './AuthPage.scss';

const AuthPage = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="auth-page">
                    <h3>Authorization</h3>
                    <form className="form form-login">
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="email" name="email" className="validate"/>
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="password" name="email" className="validate"/>
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <button className="wawes-effect wawes-light btn blue">Sign in</button>
                            <a href="" className="btn-outline btn-reg">Don't have an account?</a>
                        </div>
                    </form>


                    <h3>Registration</h3>
                    <form className="form form-login">
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="email" name="email" className="validate"/>
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="password" name="email" className="validate"/>
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <button className="wawes-effect wawes-light btn blue">Register</button>
                            <a href="" className="btn-outline btn-reg">Do you already have an account?</a>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

export default AuthPage;