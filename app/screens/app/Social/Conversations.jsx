import {View} from "react-native";
import {ConversationsList} from "../../../components/ConversationsList";
import {useEffect, useState} from "react";
import axios from "axios";
import {API_URL, useAuth} from "../../../context/AuthContext";

export function Conversations() {
    const {user} = useAuth()
    const [conversations, setConversations] = useState([])

    useEffect(() => {
        (async () => {
            const result = await axios.get(`${API_URL}/user/notifications`)

            setConversations(result.data)
        })()
    }, []);
    return (
        <>
            <View style={{flex: 1}}>
                <ConversationsList conversations={conversations} />
            </View>
        </>
    )
}