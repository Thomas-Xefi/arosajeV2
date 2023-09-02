import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Home} from "../screens/app/Home";
import {Ad} from "../screens/app/Ad";
import {Social} from "../screens/app/Social";
import {Account} from "../screens/app/Account";
import Ionicons from "react-native-vector-icons/Ionicons"
import {useAuth} from "../context/AuthContext";
import {Button, ButtonIcon, ButtonText} from "@gluestack-ui/themed";

export function AppLayout() {
    const Tab = createBottomTabNavigator()

    const {user, onLogout} = useAuth()

    return (
        <>
            <Tab.Navigator screenOptions={{
                headerTitle: user && Object.keys(user).length > 0 && `Hi, ${user.firstname} ${user.lastname}`,
                headerRight: () =>
                    <Button size="md" variant="link" mr='$4' action="positive" isDisabled={false} isFocusVisible={false} onPress={onLogout}>
                        <ButtonText mr='$1'>Sign out</ButtonText>
                        <Ionicons name="ios-exit-outline" size={28} color="#72c269" />
                    </Button>
            }}>
                <Tab.Screen name="Home" component={Home} options={{
                    tabBarIcon: () => { return <Ionicons name="home-outline" size={28} color="black" /> },
                    unmountOnBlur: true,
                }} />
                <Tab.Screen name="Ad" component={Ad} options={{
                    tabBarIcon: () => { return <Ionicons name="add-circle-outline" size={28} color="black" /> }
                }} />
                <Tab.Screen name="Social" component={Social} options={{
                    tabBarIcon: () => { return <Ionicons name="chatbubbles-outline" size={28} color="black" /> }
                }} />
                <Tab.Screen name="Account" component={Account} options={{
                    tabBarIcon: () => { return <Ionicons name="person-circle-outline" size={28} color="black" /> }
                }} />
            </Tab.Navigator>
        </>
    )
}