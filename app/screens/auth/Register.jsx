import {useAuth} from "../../context/AuthContext";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {Image, SafeAreaView, StyleSheet} from "react-native";
import Logo from "../../../assets/images/Logo.png";
import {
    AlertCircleIcon,
    Box, Button, ButtonText,
    FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText,
    FormControlLabel,
    FormControlLabelText, Heading, HStack,
    Input,
    InputField, Link, LinkText,
    Text,
    VStack
} from "@gluestack-ui/themed";

export const Register = () => {
    const navigation = useNavigation()
    const {onRegister} = useAuth()
    const [registerData, setRegisterData] = useState(
        {lastname: '', firstname: '', address: '', phone_number: '', email: '', password: ''})

    const register = async () => {
        const result = await onRegister(registerData)
        if (result && result.error === true) {
            console.log(result)
        } else {
            navigation.navigate('Login')
        }
    }

    return (
        <>
            <SafeAreaView style={{margin: 16}}>
                <Image source={Logo} style={[styles.logo]}/>

                <Heading size={'2xl'} style={{alignSelf: 'center'}}>Arosaje</Heading>

                <Box mb='$4' mt='$4'>
                    <VStack space='md'>
                        <FormControl size="md" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={true}>
                            <FormControlLabel mb='$1'>
                                <FormControlLabelText>Firstname</FormControlLabelText>
                            </FormControlLabel>
                            <Input>
                                <InputField
                                    placeholder="Firstname"
                                    onChangeText={(value) => setRegisterData({...registerData, firstname: value})}
                                />
                            </Input>
                            <FormControlError>
                                <FormControlErrorIcon as={AlertCircleIcon}/>
                                <FormControlErrorText>Atleast 6 characters are required.</FormControlErrorText>
                            </FormControlError>
                        </FormControl>
                        <FormControl size="md" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={true}>
                            <FormControlLabel mb='$1'>
                                <FormControlLabelText>lastname</FormControlLabelText>
                            </FormControlLabel>
                            <Input>
                                <InputField
                                    placeholder="lastname"
                                    onChangeText={(value) => setRegisterData({...registerData, lastname: value})}
                                />
                            </Input>
                            <FormControlError>
                                <FormControlErrorIcon as={AlertCircleIcon}/>
                                <FormControlErrorText>Atleast 6 characters are required.</FormControlErrorText>
                            </FormControlError>
                        </FormControl>
                        <FormControl size="md" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={true}>
                            <FormControlLabel mb='$1'>
                                <FormControlLabelText>Address</FormControlLabelText>
                            </FormControlLabel>
                            <Input>
                                <InputField
                                    placeholder="Address"
                                    onChangeText={(value) => setRegisterData({...registerData, address: value})}
                                />
                            </Input>
                            <FormControlError>
                                <FormControlErrorIcon as={AlertCircleIcon}/>
                                <FormControlErrorText>Atleast 6 characters are required.</FormControlErrorText>
                            </FormControlError>
                        </FormControl>
                        <FormControl size="md" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={true}>
                            <FormControlLabel mb='$1'>
                                <FormControlLabelText>Phone number</FormControlLabelText>
                            </FormControlLabel>
                            <Input>
                                <InputField
                                    placeholder="Phone number"
                                    onChangeText={(value) => setRegisterData({...registerData, phone_number: value})}
                                />
                            </Input>
                            <FormControlError>
                                <FormControlErrorIcon as={AlertCircleIcon}/>
                                <FormControlErrorText>Atleast 6 characters are required.</FormControlErrorText>
                            </FormControlError>
                        </FormControl>
                        <FormControl size="md" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={true}>
                            <FormControlLabel mb='$1'>
                                <FormControlLabelText>Email</FormControlLabelText>
                            </FormControlLabel>
                            <Input>
                                <InputField
                                    placeholder="Email"
                                    onChangeText={(value) => setRegisterData({...registerData, email: value})}
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
                                    onChangeText={(value) => setRegisterData({...registerData, password: value})}
                                />
                            </Input>
                            <FormControlError>
                                <FormControlErrorIcon as={AlertCircleIcon}/>
                                <FormControlErrorText>Atleast 6 characters are required.</FormControlErrorText>
                            </FormControlError>
                        </FormControl>
                        <Button mt='$4' size="md" variant="solid" action="positive" isDisabled={false} isFocusVisible={false}>
                            <ButtonText onPress={register}>Register</ButtonText>
                        </Button>
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