import {useEffect, useState} from "react";
import {API_URL, useAuth} from "../../context/AuthContext";
import {Text} from "galio-framework";
import {SafeAreaView, View} from "react-native";
import {SpeciesList} from "../../components/species/SpeciesList";
import {Icon, Input, InputField, InputIcon, SearchIcon} from "@gluestack-ui/themed";
import {PlantsList} from "../../components/plants/PlantsList";
import axios from "axios";
import {debounce} from "lodash";
import {value} from "lodash/seq";

export function Home() {
    const [plants, setPlants] = useState([])
    const {user} = useAuth()
    const [search, setSearch] = useState({field: 'name', value: ''})

    const searchCall = async () => {
        console.log(search)
        const response = await axios.post(`${API_URL}/plants/search`,
            {
                filters: [
                    {field: 'owner_id', operator: '!=', value: user.id}
                ],
                search: search
            }
        );
        setPlants(response.data)
    }

    const handleSearchChange = (value) => {
        setSearch({...search, value: value})
        searchCall()
    }

    const searchDebounce = debounce(value => handleSearchChange(value), 500)

    useEffect(() => {
        if (user && Object.keys(user).length > 0) {
            (async () => {
                await searchCall()
            })()
        }
    }, [user])
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
                    <Text h5 bold>Species</Text>
                    <SpeciesList/>
                </View>

                <View style={{marginTop: 16, flex: 1}}>
                    <Text h5 bold>Plants</Text>
                    <PlantsList plants={plants}/>
                </View>
            </SafeAreaView>
        </>
    )
}