import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps
}


export const Container = styled(SafeAreaView)<Props>`
    flex: 1;
    background-color: ${ ({theme, type}) => type === 'PRIMARY' 
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_MID
    };
`
export const ContainerUp = styled.View`
    padding: 24px; 
`

export const Header = styled.TouchableOpacity`
    align-items: start;
    flex-direction: row;
`

export const Logo = styled.Image`
    height: 24px;
    width: 24px;
`

export const Title = styled.Text`
    font-size: 32px;
    font-weight: bold;
    text-align: center;
`

export const SubTitle = styled.Text`
    font-size: 16px;
    text-align: center;
`

export const ContainerInfo = styled.View`
    flex: 1;
    padding: 32px;
    background-color: ${ ({theme}) => theme.COLORS.WHITE};
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
`

export const InfoText = styled.Text`
    font-size: 16px;
    text-align: center;
    font-weight: bold;
`

export const InfoCardMax = styled.View`
    margin-top: 22px;
    padding: 22px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    background-color: ${ ({theme}) => theme.COLORS.GRAY_5};
`

export const InfoCardMin = styled(View)<Props>`
    margin: 12px;
    margin-top: 22px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    background-color: ${ ({theme, type}) => type === 'PRIMARY'
         ? theme.COLORS.GREEN_LIGHT :  theme.COLORS.RED_LIGHT};
    width: 50%;
    padding: 16px;
`