import {useCallback, useEffect, useState} from "react";
import {API_URL, useAuth} from "../../context/AuthContext";
import {SafeAreaView, View} from "react-native";
import {SpeciesList} from "../../components/species/SpeciesList";
import {Icon, Input, InputField, InputIcon, SearchIcon, Text} from "@gluestack-ui/themed";
import {PlantsList} from "../../components/plants/PlantsList";
import axios from "axios";
import {debounce} from "lodash";
import {value} from "lodash/seq";
import {useFocusEffect} from "@react-navigation/native";

export function Home() {
    const [plants, setPlants] = useState([])
    const {user} = useAuth()

    const searchCall = async (search = '') => {
        const response = await axios.post(`${API_URL}/plants/search?includes=guardian,status`,
            {
                filters: [
                    {field: 'owner_id', operator: '!=', value: user?.id},
                    {field: 'guardian_id', operator: '=', value: null},
                ],
                search: {field: 'name', value: search}
            }
        );
        setPlants(response.data)
    }

    const searchDebounce = debounce(value => searchCall(value), 500)

    useFocusEffect(
        useCallback(() => {
            if (user && Object.keys(user).length > 0) {
                (async () => {
                    await searchCall()
                })()
            }
        }, [user])
    );

    return (
        <>
            <SafeAreaView style={{margin: 16, flex: 1}}>
                <Input>
                    <InputIcon pl='$3'>
                        <Icon as={SearchIcon}/>
                    </InputIcon>
                    <InputField
                        placeholder="Search..."
                        onChangeText={searchDebounce}
                    />
                </Input>

                <View style={{marginTop: 16}}>
                    <Text>Species</Text>
                    <SpeciesList />
                </View>

                <View style={{marginTop: 16, flex: 1}}>
                    <Text>Plants</Text>
                    <PlantsList plants={plants}/>
                </View>
            </SafeAreaView>
        </>
    )
}