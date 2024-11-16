
import { TextInputProps } from "react-native";
import { ContainerInput } from "./style";


export function Input({...rest}: TextInputProps) {
    return (
        <ContainerInput 
            {...rest}
            selectionColor="red" 
        />

    )
}