import {Heading, Text} from "@gluestack-ui/themed";
import {useEffect, useState} from "react";
import {API_URL, useAuth} from "../../../context/AuthContext";
import axios from "axios";
import {PlantsList} from "../../../components/plants/PlantsList";
import {View} from "react-native";

export function OwnPlant() {
    const [plants, setPlants] = useState([])
    const {user} = useAuth()

    useEffect(() => {
        (async () => {
            const response = await axios.post(`${API_URL}/plants/search?includes=guardian,status,owner`,
                {
                    filters: [
                        {field: 'owner_id', operator: '=', value: user?.id},
                    ],
                }
            );
            setPlants(response.data)
        })()
    }, [])
    return (
        <>
            <View style={{margin: 16, flex: 1}}>
                <Heading size={'lg'} style={{alignSelf: 'center'}}>My plants</Heading>

                <PlantsList plants={plants}/>
            </View>
        </>
    )
}