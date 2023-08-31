import {useAuth} from "../../context/AuthContext";
import {Heading, Text} from "@gluestack-ui/themed";
import {FormPlant} from "../../components/plants/FormPlant";
import Logo from "../../../assets/images/Logo.png";
import {Image, StyleSheet} from "react-native";

export function Ad() {
    const {user} = useAuth()

    return (
        <>
            <Image source={Logo} style={[styles.logo]}/>
            <Heading size={'2xl'} style={{alignSelf: 'center'}}>Créer son annonce</Heading>
            <FormPlant />
        </>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 125,
        height: 125,
        marginVertical: 1,
        alignSelf: 'center'
    }
})