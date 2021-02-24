import React from 'react';
import './App.scss';
import {BrowserRouter} from 'react-router-dom';
import {useRotes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/auth.context";

function App() {
    const {token, login, logout, usrID} = useAuth();
    const isAuthenticated = !!token;
    const routes = useRotes(isAuthenticated);

    return (
        <AuthContext.Provider value={{
            token, usrID, login, logout, isAuthenticated
        }}>
        <BrowserRouter>
            {routes}
        </BrowserRouter>
        </AuthContext.Provider>
    )

}

export default App;