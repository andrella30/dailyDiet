import { ImageSourcePropType, Text, TouchableOpacityProps } from "react-native";
import { ButtonTypeSizeProps, ButtonTypeStyleProps, Container, ContainerButton, Logo, Title, UpTitle } from "./style";

type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps;
    size?: ButtonTypeSizeProps;
    icon?: ImageSourcePropType;
    
}

export default function Button({ 
        title, 
        icon,
        type = 'PRIMARY', 
        size = 'MAX', 
        ...rest 
    }: Props) {
        return (
        <>
            <Container> 
                <ContainerButton type={type} size={size} {...rest}> 
                    
                    {icon && <Logo source={icon}/> }
                    <Title  type={type} size={size}>  {title} </Title>
                </ContainerButton>
            </Container>
        </>

    )
}