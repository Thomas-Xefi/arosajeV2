import {FlatList, View} from "react-native";
import {ConversationItem} from "./ConversationItem";

export function ConversationsList({conversations, markAsRead}) {
    return (
        <>
            <FlatList
                data={conversations}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <ConversationItem conversation={item} markAsRead={markAsRead}/>}
            />
        </>
    )
}