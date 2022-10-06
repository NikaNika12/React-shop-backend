import React, {useContext, useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
// import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
// import {Context} from "../index";


const Auth = observer(() => {
    // const {user} = useContext(Context)
    const location = useLocation()
    console.log(location)
    // const history = useNavigate()
    const isLogin = location.pathname === "/login"
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    // const click = async () => {
    //     try {
    //         let data;
    //         if (isLogin) {
    //             data = await login(email, password);
    //         } else {
    //             data = await registration(email, password);
    //         }
    //         user.setUser(user)
    //         user.setIsAuth(true)
    //         history.push("/gallery")
    //     } catch (e) {
    //         alert(e.response.data.message)
    //     }

    //}

    return (
        <div className="container-form">
            <div className="card">
                <div className="card-header">{isLogin ? 'Authorization' : "Registration"}</div>
                <form className="form">
                    <input className="text" 
                        placeholder="Email..."
                        // value={email}
                        // onChange={e => setEmail(e.target.value)}
                    />
                    <input className="text"
                        placeholder="Password..."
                        // value={password}
                        // onChange={e => setPassword(e.target.value)}
                        // type="password"
                    />
                    <div className="row">
                        {isLogin ?
                            <div className="message">
                                Not registered? <Link className="message-link" to="/registration">Create an account!</Link>
                            </div>
                            :
                            <div className="message">
                                Already registered? <Link className="message-link" to="/login">Log in!</Link>
                            </div>
                        }
                        <button
                            //onClick={click}
                        >
                            {isLogin ? 'Log in' : 'Sign in'}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
});

export default Auth;