import {Image, View, StyleSheet} from "react-native";
import {Text} from "@gluestack-ui/themed";
import {useAuth} from "../context/AuthContext";

const Logo = require('../../assets/images/Logo.png');

export function ConversationItem({conversation}) {
    const {user} = useAuth()

    console.log(conversation)

    return (
        <>
            <View style={styles.itemContainer}>
                <Image source={Logo} style={styles.avatar}/>
                <View style={styles.textContainer}>
                    <Text style={styles.username}>
                        {
                            conversation.guardian
                        }
                    </Text>
                    <Text style={styles.lastMessage}>
                        {
                            `Votre plante ${conversation.plant} vient d'être guardée`
                        }
                    </Text>
                </View>
            </View>
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