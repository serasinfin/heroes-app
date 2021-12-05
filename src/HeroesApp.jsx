import {AppRouter} from "./routers/AppRouter";

import {AuthContext} from "./auth/authContext";
import {authReducer} from "./auth/authReducer";
import {useEffect, useReducer} from "react";

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || {logged: false}
}



const HeroesApp = () => {
    ///
    const [user, dispatch] = useReducer(authReducer, {}, init);
    ///
    useEffect(() => {
        if(!user) return null;
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])
    return (
        // <div>
        //     <h1>HeroesApp</h1>
        // </div>
        <AuthContext.Provider value={{user, dispatch}}>
            <AppRouter />
        </AuthContext.Provider>
    );
};

export {HeroesApp};
