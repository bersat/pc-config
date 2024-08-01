import React from "react";
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/use-auth';
import { removeUser } from "../../store/slices/userSlice";
import { getDatabase, ref, set } from 'firebase/database';
import './raslogin.css';

const Raslogin = () => {
    const dispatch = useDispatch();
    const { isAuth, email } = useAuth();
    const db = getDatabase();

    const handleLogout = async () => {
        // Очистка корзины в базе данных
        if (isAuth) {
            const userId = isAuth.uid;
            const cartRef = ref(db, `carts/${userId}`);
            try {
                await set(cartRef, []);
            } catch (error) {
                console.error('Error clearing cart', error);
            }
        }
        dispatch(removeUser());
    };

    return isAuth ? (
        <div className="Raslogin">
            <div className="bgrasloginblock">
                <h1 style={{ textAlign: 'center', color: '#fff' }}>Вы хотите выйти из аккаунта?</h1>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                    <div>
                        <div>
                            <button className="btnraslogin" onClick={handleLogout}>Выйти</button>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '40px' }}>
                    <p className="p">из {email}</p>
                </div>
            </div>
        </div>
    ) : (
        <Navigate replace to='/' />
    );
}

export default Raslogin;
