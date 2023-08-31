import {NavigationContainer} from "@react-navigation/native";
import {useAuth} from "../context/AuthContext";
import {Login} from "../screens/auth/Login";
import {Register} from "../screens/auth/Register";
import {Home} from "../screens/app/Home";
import {createStackNavigator} from "@react-navigation/stack";
import {AppLayout} from "./AppLayout";
import {useEffect, useState} from "react";

export function AuthLayout() {
    const Stack = createStackNavigator()
    const {authState, onLogout, currentUser} = useAuth();
    const [user, setUser] = useState({})

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    {authState?.authenticated
                        ? <Stack.Screen
                            name={'Arosaje'}
                            component={AppLayout}
                            options={{headerShown: false}}
                        />
                        : <Stack.Group>
                            <Stack.Screen name={'Login'} component={Login}/>
                            <Stack.Screen name={'Register'} component={Register}/>
                        </Stack.Group>
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}