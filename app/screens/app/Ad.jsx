import {useEffect, useState} from "react";
import {API_URL, useAuth} from "../../context/AuthContext";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import {Text} from "galio-framework";

export function Ad() {
    const {currentUser, authState} = useAuth()
    const [user, setUser] = useState({})

    return (
        <>
            <Text h1>Create a plant</Text>
        </>
    )
}