import {createContext, useContext, useState, useEffect} from "react";
import axios from "axios";
import * as SecureStore from 'expo-secure-store';

const API_KEY = 'jwt'
export const API_URL = 'http://127.0.0.1:8000/api'
const AuthContext = createContext({})

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {
    const [authState, setAuthState] = useState({token: '', authenticated: false});
    const [user, setUser] = useState({})
    const [countNotifications, setCountNotifications] = useState(0)

    useEffect(() => {
        (async () => {
            const token = await SecureStore.getItemAsync(API_KEY);

            if (token) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

                setAuthState({...authState, token: token, authenticated: true});
            }
        })()
    }, [])
    const register = async (registerData) => {
        try {
            return await axios.post(`${API_URL}/users`, registerData)
        } catch (e) {
            return {error: true, msg: (e).response}
        }
    }
    const login = async (loginData) => {
        try {
            const response = await axios.post(`${API_URL}/login`, loginData)

            setAuthState({
                ...authState,
                token: response.data.access_token,
                authenticated: true
            });

            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;

            await currentUser();

            await handleCountNotifications()

            // await SecureStore.setItemAsync(API_KEY, response.data.access_token)

            return response;
        } catch (e) {
            return {error: true, message: e.response}
        }
    }
    const logout = async () => {
        const response = await axios.post(`${API_URL}/logout`)

        // await SecureStore.deleteItemAsync(API_KEY);

        axios.defaults.headers.common['Authorization'] = '';

        setAuthState({token: '', authenticated: false});

        setUser({})
    }
    const currentUser = async () => {
        const response = await axios.get(`${API_URL}/current-user`)

        setUser(response.data)

        return response.data
    }

    const handleCountNotifications = async () => {
        const response = await axios.get(`${API_URL}/user/notifications/count`)

        setCountNotifications(response.data)

        return response.data
    }

    const value = {
        onRegister: register,
        onLogin: login,
        onLogout: logout,
        currentUser: currentUser,
        handleCountNotifications: handleCountNotifications,
        authState,
        user,
        countNotifications
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}