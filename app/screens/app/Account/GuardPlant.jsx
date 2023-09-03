import {Heading, Text} from "@gluestack-ui/themed";
import {useEffect, useState} from "react";
import {API_URL, useAuth} from "../../../context/AuthContext";
import axios from "axios";
import {View} from "react-native";
import {PlantsList} from "../../../components/plants/PlantsList";

export function GuardPlant() {
    const [plants, setPlants] = useState([])
    const {user} = useAuth()

    useEffect(() => {
        (async () => {
            const response = await axios.post(`${API_URL}/plants/search?includes=guardian,status`,
                {
                    filters: [
                        {field: 'guardian_id', operator: '=', value: user?.id},
                    ],
                }
            );
            setPlants(response.data)
        })()
    }, [])
    return (
        <>
            <View style={{margin: 16, flex: 1}}>
                <Heading size={'lg'} style={{alignSelf: 'center'}}>The plants I keep</Heading>

                <PlantsList plants={plants}/>
            </View>
        </>
    )
}