import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../auth/authContext";
import {types} from "../../types/types";

const LoginScreen = () => {
    const navigate = useNavigate()

    const {dispatch} = useContext(AuthContext);

    const handleLogin = () => {
        const action = {
            type: types.login,
            payload: {name: 'Alejandro S.'}
        }
        dispatch(action);

        const lastPath = localStorage.getItem('lastPath') || '/dc'
        navigate(lastPath, {
            replace: true,
        })

    };
    
    return (
        <div className={"container mt-5"}>
            <h2>login</h2>
            <hr/>
            <button
                className={"btn-primary"}
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    );
};

export {LoginScreen};