import {Image, View, StyleSheet} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {Pressable, Text} from "@gluestack-ui/themed";
import {API_URL, useAuth} from "../context/AuthContext";
import axios from "axios";
import {useState} from "react";

const Logo = require('../../assets/images/Logo.png');

export function ConversationItem({conversation, markAsRead}) {
    const {handleCountNotifications} = useAuth()
    const [isRead, setIsRead] = useState(!!conversation.read_at);

    const handleMarkAsRead = async () => {
        if (!isRead) {
            const result = await markAsRead(conversation.id);
            setIsRead(true)
            console.log(result)
            await handleCountNotifications()
        }
    }

    return (
        <>
            <Pressable style={styles.itemContainer} onPress={handleMarkAsRead}>
                <Image source={Logo} style={styles.avatar}/>
                <View style={styles.textContainer}>
                    <Text style={[styles.username, { fontWeight: isRead ? 'normal' : 'bold' }]}>
                        {
                            conversation.data.guardian
                        }
                    </Text>
                    <Text style={styles.lastMessage}>
                        {
                            `Votre plante ${conversation.data.plant} vient d'être guardée`
                        }
                    </Text>
                </View>
                {isRead ? (
                    <Ionicons name="mail-open-outline" size={28} color="green" />
                ) : (
                    <Ionicons name="mail-unread-outline" size={28} color="red" />
                )}
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
    },
    textContainer: {
        flex: 1,
    },
    username: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    lastMessage: {
        fontSize: 16,
        color: '#888',
    },
})