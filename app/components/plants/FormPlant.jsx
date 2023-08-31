import {useEffect, useState} from "react";
import {API_URL, useAuth} from "../../context/AuthContext";
import {Image, SafeAreaView, StyleSheet} from "react-native";
import {
    AlertCircleIcon,
    Box,
    Button,
    ButtonText,
    ChevronDownIcon,
    FormControl,
    FormControlError,
    FormControlErrorIcon,
    FormControlErrorText,
    FormControlLabel,
    FormControlLabelText,
    Heading,
    Icon,
    Input,
    InputField,
    Link,
    LinkText,
    Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper,
    SelectIcon,
    SelectInput, SelectItem,
    SelectPortal,
    SelectTrigger,
    Text,
    Textarea,
    TextareaInput,
    VStack
} from "@gluestack-ui/themed";
import axios from "axios";

export const FormPlant = () => {
    const {user} = useAuth()
    const [species, setSpecies] = useState([])
    const [form, setForm] = useState({name: '', description: '', price: 0, plant_species_id: ''})

    useEffect(() => {
        (async () => {
            const result = await axios.get(`${API_URL}/species`);
            setSpecies(result.data)
        })()
    }, [])

    const handleSubmitForm = async () => {
        const result = await axios.post(`${API_URL}/plants`, form);
        console.log(result)
    }

    return (
        <>
            <SafeAreaView style={{margin: 16}}>
                <Box mb='$4' mt='$4'>
                    <VStack space='md'>
                        <FormControl size="md" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={true}>
                            <FormControlLabel mb='$1'>
                                <FormControlLabelText>Name</FormControlLabelText>
                            </FormControlLabel>
                            <Input>
                                <InputField
                                    placeholder="Name"
                                    onChangeText={(value) => setForm({...form, name: value})}
                                />
                            </Input>
                            <FormControlError>
                                <FormControlErrorIcon as={AlertCircleIcon}/>
                                <FormControlErrorText>Atleast 6 characters are required.</FormControlErrorText>
                            </FormControlError>
                        </FormControl>
                        <FormControl size="md" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={true}>
                            <FormControlLabel mb='$1'>
                                <FormControlLabelText>Description</FormControlLabelText>
                            </FormControlLabel>
                            <Textarea size="md" isReadOnly={false} isInvalid={false} isDisabled={false}>
                                <TextareaInput
                                    placeholder="Description"
                                    onChangeText={(value) => setForm({...form, description: value})}
                                />
                            </Textarea>
                            <FormControlError>
                                <FormControlErrorIcon as={AlertCircleIcon}/>
                                <FormControlErrorText>Atleast 6 characters are required.</FormControlErrorText>
                            </FormControlError>
                        </FormControl>
                        <FormControl size="md" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={true}>
                            <FormControlLabel mb='$1'>
                                <FormControlLabelText>Price</FormControlLabelText>
                            </FormControlLabel>
                            <Input>
                                <InputField
                                    placeholder="Price"
                                    onChangeText={(value) => setForm({...form, price: value})}
                                />
                            </Input>
                            <FormControlError>
                                <FormControlErrorIcon as={AlertCircleIcon}/>
                                <FormControlErrorText>Atleast 6 characters are required.</FormControlErrorText>
                            </FormControlError>
                        </FormControl>
                        <FormControl size="md" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={true}>
                            <FormControlLabel mb='$1'>
                                <FormControlLabelText>Plant species</FormControlLabelText>
                            </FormControlLabel>
                            <Select onValueChange={(value) => setForm({...form, plant_species_id: value})}>
                                <SelectTrigger>
                                    <SelectInput placeholder="Select option" />
                                    <SelectIcon mr="$3">
                                        <Icon as={ChevronDownIcon} />
                                    </SelectIcon>
                                </SelectTrigger>
                                <SelectPortal>
                                    <SelectBackdrop />
                                    <SelectContent>
                                        <SelectDragIndicatorWrapper>
                                            <SelectDragIndicator />
                                        </SelectDragIndicatorWrapper>
                                        { species.map((item) => (<SelectItem key={item.id} label={item.name} value={item.id} />)) }
                                    </SelectContent>
                                </SelectPortal>
                            </Select>
                            <FormControlError>
                                <FormControlErrorIcon as={AlertCircleIcon}/>
                                <FormControlErrorText>Atleast 6 characters are required.</FormControlErrorText>
                            </FormControlError>
                        </FormControl>
                        <Button mt='$4' size="md" variant="solid" action="positive" isDisabled={false} isFocusVisible={false} >
                            <ButtonText onPress={handleSubmitForm}>Poster !</ButtonText>
                        </Button>
                    </VStack>
                </Box>
            </SafeAreaView>
        </>
    )
}