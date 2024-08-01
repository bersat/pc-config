import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "./AuthContext";
import { setUser } from "../../store/slices/userSlice";
import { FaUser, FaLock } from "react-icons/fa";
import './loginandregisterpages.css'


const LoginPage = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const navigate = useNavigate();
   

    

    const handleLogin = async (e) => {
        e.preventDefault();
        const auth = getAuth();


        signInWithEmailAndPassword(auth, email, pass).then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate('/');
                const login = (email, password) => {
                    const auth = getAuth();
                    
                    console.log("Trying to log in with Email:", email);  // Добавляем эту строку для дебаггинга
                
                    return signInWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                            // Также добавим этот вывод для дебаггинга
                            console.log("Logged in user:", userCredential.user);
                            return userCredential;
                        })
                        .catch((error) => {
                            console.error("Login error:", error);
                           return console.log('Аккаунт не зарегестрирвоан')
                        });
                };
            }).catch(console.error, console.log('Аккаунт не зарегестрирован'))
        
    }
   
    return(
        <div className="bgLoginobsh">
              <div style={{padding:'20px', paddingLeft:'50px'}} className="login-link">
                <p>
                 <Link style={{fontSize:'20px'}} className="login-link-Link" to="/" >На главную</Link>
                </p>
            </div>


            <div className="Login">
       
            <div className="wrapper">
            <form action="">
            <h1>Вход</h1>
            <div className="input-box">
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}  required />
                <FaUser className="icon" />
            </div>
            <div className="input-box">
                <input type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} required />
                <FaLock className="icon" />
            </div>

            <div className="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
            </div>

            <button onClick={handleLogin} type="submit">Войти</button>

            <div className="login-link">
                <p>
                 Еще нет аккаунта?<Link style={{paddingLeft:'10px'}} className="login-link-Link" to="/Register" >     Регистрация</Link>
                </p>
            </div>
               
            </form>
        </div>
        </div>

        </div>
        
        
    )
}

export default LoginPage;
