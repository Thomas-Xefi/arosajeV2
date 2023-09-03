import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {PersonalsData} from "../screens/app/Account/PersonalsData";
import {OwnPlant} from "../screens/app/Account/OwnPlant";
import {GuardPlant} from "../screens/app/Account/GuardPlant";

export function AccountLayout() {
    const Tab = createMaterialTopTabNavigator()
    return (
        <>
            <Tab.Navigator>
                <Tab.Screen name="Account" component={PersonalsData} />
                <Tab.Screen name="OwnPlant" component={OwnPlant} />
                <Tab.Screen name="GuardPlant" component={GuardPlant} />
            </Tab.Navigator>
        </>
    )
}