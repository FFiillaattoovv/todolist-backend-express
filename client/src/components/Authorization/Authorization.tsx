import {Link} from "react-router-dom";
import React, {ChangeEvent, FC} from "react";

type AuthorizationPropsType = {
    changeHandler: (event: ChangeEvent<HTMLInputElement>) => void
    form: {
        email: string,
        password: string
    }
    registerHandler: () => void
}

export const Authorization: FC<AuthorizationPropsType> = ({changeHandler, form: {email, password}, registerHandler}) => {
    return (
        <>
            <h3>Sign in</h3>
            <form className="form form-login" onSubmit={(e) => e.preventDefault()}>
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
                    <button className="wawes-effect wawes-light btn blue" onClick={registerHandler}>Sign in</button>
                    <Link to="/registration" className="btn-outline btn-reg">Don't have an account?</Link>
                </div>
            </form>
        </>
    );
};