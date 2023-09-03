import {Image, SafeAreaView, StyleSheet, View} from "react-native";
import {useEffect, useState} from "react";
import {useAuth} from "../../context/AuthContext";
import {
    AlertCircleIcon, Box,
    FormControl,
    FormControlError,
    FormControlErrorIcon, FormControlErrorText,
    FormControlLabel,
    FormControlLabelText,
    Input, InputField, VStack,
    Button, ButtonText, Link, LinkText, HStack, Text, Heading
} from "@gluestack-ui/themed";
import {useNavigation} from "@react-navigation/native";

const Logo = require('../../../assets/images/Logo.png');

export function Login() {
    const navigation = useNavigation()
    const {onLogin} = useAuth()
    const [loginData, setLoginData] = useState({email: 'test@gmail.com', password: 'password'})

    const login = async () => {
        const result = await onLogin(loginData)
        if (result && result.error === true) {
            console.log(result)
        }
    }

    useEffect(() => {
        login()
    }, [])
    return (
        <>
            <SafeAreaView style={{margin: 16}}>
                <Image source={Logo} style={[styles.logo]}/>

                <Heading size={'2xl'} style={{alignSelf: 'center'}}>Arosaje</Heading>

                <Box mb='$4' mt='$4'>
                    <VStack space='md'>
                        <FormControl size="md" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={true}>
                            <FormControlLabel mb='$1'>
                                <FormControlLabelText>Email</FormControlLabelText>
                            </FormControlLabel>
                            <Input>
                                <InputField
                                    placeholder="Email"
                                    onChangeText={(value) => setLoginData({...loginData, email: value})}
                                />
                            </Input>
                            <FormControlError>
                                <FormControlErrorIcon as={AlertCircleIcon}/>
                                <FormControlErrorText>Atleast 6 characters are required.</FormControlErrorText>
                            </FormControlError>
                        </FormControl>
                        <FormControl size="md" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={true}>
                            <FormControlLabel mb='$1'>
                                <FormControlLabelText>Password</FormControlLabelText>
                            </FormControlLabel>
                            <Input>
                                <InputField
                                    type="password"
                                    placeholder="Password"
                                    onChangeText={(value) => setLoginData({...loginData, password: value})}
                                />
                            </Input>
                            <FormControlError>
                                <FormControlErrorIcon as={AlertCircleIcon}/>
                                <FormControlErrorText>Atleast 6 characters are required.</FormControlErrorText>
                            </FormControlError>
                        </FormControl>
                        <Button mt='$4' size="md" variant="solid" action="positive" isDisabled={false} isFocusVisible={false} >
                            <ButtonText onPress={login}>Login</ButtonText>
                        </Button>
                        <HStack style={{justifyContent: 'center'}}>
                            <Text>Do you have any account ? </Text>
                            <Link onPress={() => navigation.navigate('Register')}>
                                <LinkText>Create account</LinkText>
                            </Link>
                        </HStack>
                    </VStack>
                </Box>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 125,
        height: 125,
        marginBottom: 20,
        alignSelf: 'center'
    }
})