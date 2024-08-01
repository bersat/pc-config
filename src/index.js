import React from "react";
import ReactDOM from "react-dom";
//import Home from "./Home/Home";
//import './index.cc'
import App from './App'
import {Provider} from 'react-redux';
import { AuthProvider } from "./Validation/pages/AuthContext";
import { store } from "./store";
import './firebase';


ReactDOM.render(
<React.StrictMode>
    <AuthProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </AuthProvider>    
</React.StrictMode>

, document.getElementById("root"));


   