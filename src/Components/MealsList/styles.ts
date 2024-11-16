import { TouchableOpacity, View } from 'react-native'
import styled from 'styled-components/native'

type Props = {
    type?: string
    isDiet?: boolean
}


export const Container = styled.View`
    flex: 1;
    background-color: ${ ({theme}) => theme.COLORS.WHITE};
    margin-top: 12px;
`

export const DateTitle = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: ${ ({theme}) => theme.COLORS.GRAY_1};
`

export const MealCard = styled(TouchableOpacity)<Props>` 
    width: 100%;
    height: 50px;
    flex-direction: row;
    align-items: center;
    border-width: 1px;
    border-radius: 10px;
    border-color: ${ ({theme}) => theme.COLORS.GRAY_4};
    padding: 12px;
    margin-bottom: 8px;
    margin-top: 12px;
`

export const HourText = styled.Text`
    font-weight: bold;
`

export const TitleText = styled.Text`
    flex: 1;
    color: ${ ({theme}) => theme.COLORS.GRAY_1};
`

export const DietStatus = styled(View)<Props>`
    height: 14px;
    width: 14px;
    background-color: ${ ({theme, isDiet}) => isDiet ? 
        theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
    border-radius: 10px;
`

