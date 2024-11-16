import { TouchableOpacityProps } from "react-native";
import { ContainerButton, ContainerIcon, Logo, Subtitle, Title } from "./style";

import diagonalDirection from 'assets/diagonalDirection.png'

type Props = {
    dietPercentage: number
} & TouchableOpacityProps 

export default function PercentButton({dietPercentage, ...rest}: Props) {
    
    const colorType = dietPercentage > 50 ? 'PRIMARY' : 'SECONDARY'

    return (
        <ContainerButton {...rest} type={colorType}>             
            <ContainerIcon>
                <Logo source={diagonalDirection} tintColor={
                    colorType === 'SECONDARY' ? 'red' : 'green'}/> 
            </ContainerIcon>
            
            <Title> {dietPercentage}% </Title>
            <Subtitle> das refeições dentro da dieta </Subtitle>

        </ContainerButton>
    )
}