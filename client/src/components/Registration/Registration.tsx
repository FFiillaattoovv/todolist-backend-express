import {Link} from "react-router-dom";
import React, {ChangeEvent, FC} from "react";

type RegistrationPropsType = {
    changeHandler: (event: ChangeEvent<HTMLInputElement>) => void
    form: {
        email: string,
        password: string
    }
}

export const Registration: FC<RegistrationPropsType> = ({changeHandler, form: {email, password}}) => {
    return (
        <>
            <h3>Sign up</h3>
            <form className="form form-login">
                <div className="row">
                    <div className="input-field col s12">
                        <input type="email"
                               name="email"
                               className="validate"
                               onChange={changeHandler}
                               value={email}/>
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input type="password"
                               name="password"
                               className="validate"
                               onChange={changeHandler}
                               value={password}/>
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="row">
                    <button className="wawes-effect wawes-light btn blue">Register</button>
                    <Link to="/login" className="btn-outline btn-reg">Do you already have an account?</Link>
                </div>
            </form>
        </>
    );
};