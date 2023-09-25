import {createStackNavigator} from "@react-navigation/stack";
import {Conversations} from "../screens/app/Social/Conversations";

export function SocialLayout() {
    const Stack = createStackNavigator()
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name={'Conversations'} component={Conversations} options={{headerShown: false}} />
            </Stack.Navigator>
        </>
    )
}