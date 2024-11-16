import { View } from 'react-native';
import styled from 'styled-components/native'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type?: ButtonTypeStyleProps
}

export const Container = styled.View`
    flex: 1;
    background-color: ${ ({theme}) => theme.COLORS.WHITE};
`

export const Header = styled(View)<Props>`
    margin-top: 38px;
    background-color: ${ ({theme, type}) => type === 'PRIMARY' 
        ? theme.COLORS.GREEN_MID
        : theme.COLORS.RED_MID
    };
    padding: 24px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const InfoContainer = styled.View`
    margin-left: 24px;
    margin-top: 24px;
`

export const TitleContainer = styled.View`
    flex: 1;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 22px;
    text-align: center;
    font-family: 'NunitoSans_700Regular';
`


export const Logo = styled.Image`
    height: 24px;
    width: 24px;
`

export const DetailTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
    font-family: 'NunitoSans_700Regular';
`

export const DateTitle = styled.Text`
    font-size: 16px;
    font-weight: bold;
    font-family: 'NunitoSans_700Regular';
`

export const DetailSubtitle = styled.Text`
    font-size: 14px;
    font-family: 'NunitoSans_700Regular';
`

export const IsDietLabelContainer = styled.View`
    margin: 24px;
    width: 144px;
    height: 34px;
    background-color: ${ ({theme}) => theme.COLORS.GRAY_6};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

export const IsDietContainer = styled(View)<Props>`
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: ${ ({theme, type}) => type === 'PRIMARY' 
        ? theme.COLORS.GREEN_DARK
        : theme.COLORS.RED_DARK
    };
    margin-right: 8px;
`

export const IsDietText = styled.Text`
    font-size: 14px;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const ButtonContainer = styled.View`
    margin-top: 12px;
    margin-bottom: 16px;
    padding-left: 16px;
    padding-right: 16px;
`