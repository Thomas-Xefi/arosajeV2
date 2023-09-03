import {useEffect, useState} from "react";
import {API_URL, useAuth} from "../../../context/AuthContext";
import axios from "axios";
import {
    AlertCircleIcon, Box, Button, ButtonText,
    FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText,
    FormControlLabel,
    FormControlLabelText,
    Input,
    InputField,
    Text,
    VStack
} from '@gluestack-ui/themed'
import {View} from "react-native";

export function PersonalsData() {
    const {user} = useAuth()
    const [oldUserData, setOldUserData] = useState({
        lastname: user.lastname,
        firstname: user.firstname,
        address: user.address,
        phone_number: user.phone_number,
        email: user.email,
    })
    const [formUser, setFormUser] = useState(oldUserData)

    const toggleStateButton = () => {
        return oldUserData === formUser
    }

    const handleChangeInput = (field, value) => {
        setFormUser({...formUser, [field]: value})
        toggleStateButton()
    }

    const update = async () => {
        const result = await axios.put(`${API_URL}/users/${user.id}`, formUser)
        setOldUserData(result.data)
        setFormUser(result.data)
    }

    return (
        <>
            <View style={{margin: 16, flex: 1}}>
                <Text>Personals data</Text>

                <Box mb='$4' mt='$4'>
                    <VStack space='md'>
                        <FormControl size="md" isDisabled={false} isInvalid={false} isReadOnly={false}>
                            <FormControlLabel mb='$1'>
                                <FormControlLabelText>Firstname</FormControlLabelText>
                            </FormControlLabel>
                            <Input>
                                <InputField
                                    placeholder="Firstname"
                                    value={formUser.lastname}
                                    onChangeText={(value) => {handleChangeInput('lastname', value)}}
                                />
                            </Input>
                            <FormControlError>
                                <FormControlErrorIcon as={AlertCircleIcon}/>
                                <FormControlErrorText>Atleast 6 characters are required.</FormControlErrorText>
                            </FormControlError>
                        </FormControl>
                        <FormControl size="md" isDisabled={false} isInvalid={false} isReadOnly={false}>
                            <FormControlLabel mb='$1'>
                                <FormControlLabelText>lastname</FormControlLabelText>
                            </FormControlLabel>
                            <Input>
                                <InputField
                                    placeholder="lastname"
                                    value={formUser.firstname}
                                    onChangeText={(value) => {handleChangeInput('firstname', value)}}
                                />
                            </Input>
                            <FormControlError>
                                <FormControlErrorIcon as={AlertCircleIcon}/>
                                <FormControlErrorText>Atleast 6 characters are required.</FormControlErrorText>
                            </FormControlError>
                        </FormControl>
                        <FormControl size="md" isDisabled={false} isInvalid={false} isReadOnly={false}>
                            <FormControlLabel mb='$1'>
                                <FormControlLabelText>Address</FormControlLabelText>
                            </FormControlLabel>
                            <Input>
                                <InputField
                                    placeholder="Address"
                                    value={formUser.address}
                                    onChangeText={(value) => {handleChangeInput('address', value)}}
                                />
                            </Input>
                            <FormControlError>
                                <FormControlErrorIcon as={AlertCircleIcon}/>
                                <FormControlErrorText>Atleast 6 characters are required.</FormControlErrorText>
                            </FormControlError>
                        </FormControl>
                        <FormControl size="md" isDisabled={false} isInvalid={false} isReadOnly={false}>
                            <FormControlLabel mb='$1'>
                                <FormControlLabelText>Phone number</FormControlLabelText>
                            </FormControlLabel>
                            <Input>
                                <InputField
                                    placeholder="Phone number"
                                    value={formUser.phone_number}
                                    onChangeText={(value) => {handleChangeInput('phone_number', value)}}
                                />
                            </Input>
                            <FormControlError>
                                <FormControlErrorIcon as={AlertCircleIcon}/>
                                <FormControlErrorText>Atleast 6 characters are required.</FormControlErrorText>
                            </FormControlError>
                        </FormControl>
                        <FormControl size="md" isDisabled={false} isInvalid={false} isReadOnly={false}>
                            <FormControlLabel mb='$1'>
                                <FormControlLabelText>Email</FormControlLabelText>
                            </FormControlLabel>
                            <Input>
                                <InputField
                                    placeholder="Email"
                                    value={formUser.email}
                                    onChangeText={(value) => {handleChangeInput('email', value)}}
                                />
                            </Input>
                            <FormControlError>
                                <FormControlErrorIcon as={AlertCircleIcon}/>
                                <FormControlErrorText>Atleast 6 characters are required.</FormControlErrorText>
                            </FormControlError>
                        </FormControl>
                        <Button
                            mt='$4'
                            size="md"
                            variant="solid"
                            action="positive"
                            isDisabled={toggleStateButton()}
                            isFocusVisible={false}
                            onPress={update}
                        >
                            <ButtonText>Update</ButtonText>
                        </Button>
                    </VStack>
                </Box>
            </View>
        </>
    )
}