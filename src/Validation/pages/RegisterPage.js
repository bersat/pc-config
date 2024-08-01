import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { FaUser, FaLock } from "react-icons/fa";
import { setUser } from "../../store/slices/userSlice";

const RegisterPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [errorText, setErrorText] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        const auth = getAuth();

        if (pass.length < 6) {
            setErrorText('Пароль должен состоять из 6 и более символов');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
            const user = userCredential.user;
            console.log(user);
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken,
            }));
            navigate('/Login');
        } catch (error) {
            console.error('Error registering user:', error.message);
            // здесь вы можете добавить логику для отображения ошибки пользователю
        }
    }

    return (
        <div className="bgLoginobsh">
            <div className="Login">
                <div className="wrapper">
                    <form onSubmit={handleRegister}>
                        <h1>Регистрация</h1>
                        <div className="input-box">
                            <input 
                                type="text" 
                                placeholder="Email"  
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                            <FaUser className="icon" />
                        </div>
                        <div className="input-box">
                            <input 
                                type="password" 
                                placeholder="Придумайте пароль" 
                                value={pass} 
                                onChange={(e) => setPass(e.target.value)}  
                                required 
                            />
                            <FaLock className="icon" />
                        </div>
                        {errorText && <p style={{ color: 'red', marginTop:'-20px', marginBottom:'8px', textAlign:'center' }}>{errorText}</p>}
                        <button type="submit">Зарегистрироваться</button>

                        <div className="login-link">
                            <p>
                                У вас уже есть учетная запись? 
                                <Link style={{ paddingLeft: '10px' }} className="login-link-Link" to="/Login">Войти</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
