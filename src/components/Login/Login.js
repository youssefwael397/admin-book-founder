import React, { useState } from "react";
import api_url from "./../../env";
export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            username: username,
            password: password
        }
        handleLoginRequest(`${api_url}/admin/login`, JSON.stringify(data))
    };


    const handleLoginRequest = async (url, form) => {
        await fetch(url, {
            method: "POST",
            body: form,
            headers: { 'Content-Type': 'application/json' }

        })
            .then((res) => res.json())
            .then((data) => {
                if (data.status === 'ok') {
                    setError('')
                    const token = data.data
                    window.localStorage.setItem('token', token)
                    window.location.reload();
                } else {
                    setError(data.error)
                }
            });
    };
    return (
        <div className="my-4">
            <div className="container">
                <div className="form p-4">
                    <div className="form-container form-login">
                        <div className="title text-center">Login</div>
                        <div className="content">
                            <form onSubmit={handleSubmit}>
                                <div className="user-details m-0">
                                    <div className="input-box w-100">
                                        <span className="details me-auto">Username</span>
                                        <input
                                            type="text"
                                            value={username}
                                            name="name"
                                            placeholder="admin username"
                                            required
                                            onChange={handleUsername}
                                        />
                                    </div>
                                    <div className="input-box w-100">
                                        <span className="details">Password</span>
                                        <input
                                            type="password"
                                            name="author"
                                            value={password}
                                            placeholder="admin password"
                                            required
                                            onChange={handlePassword}
                                        />
                                    </div>
                                    <div className="w-100">
                                        <p className="text-danger my-0">{error}</p>
                                        <div className="button m-0">
                                            <input className="w-25 my-2" type="submit" value="Submit" />
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
