import React, {ChangeEvent, useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './AuthPage.scss';
import {Registration} from "../../components/Registration/Registration";
import {Authorization} from "../../components/Authorization/Authorization";
import axios from "axios";

const AuthPage = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [event.target.name]: event.target.value});
    };

    const registerHandler = async () => {
        try {
            await axios.post('/api/auth/registration', {...form}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => console.log(response));
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <BrowserRouter>
            <div className="container">
                <div className="auth-page">
                    <Routes>
                        <Route path="/login" element={<Authorization changeHandler={changeHandler}
                                                                     form={form}
                                                                     registerHandler={registerHandler}/>}/>
                        <Route path="/registration"
                               element={<Registration changeHandler={changeHandler}
                                                      form={form}
                                                      registerHandler={registerHandler}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default AuthPage;