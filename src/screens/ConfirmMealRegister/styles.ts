import { Text } from 'react-native';
import styled from 'styled-components/native'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps
}

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${ ({theme}) => theme.COLORS.WHITE};
    padding: 24px;
`

export const Title = styled(Text)<Props>`
    font-size: 30px;
    font-weight: bold;
    color: ${ ({theme, type}) => type === 'PRIMARY' 
        ? theme.COLORS.GREEN_DARK
        : theme.COLORS.RED_DARK
    };
`

export const Subtitle = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: ${ ({theme}) => theme.COLORS.GRAY_3};
    margin-bottom: 35px;
    text-align: center;
`

export const Logo = styled.Image`
    height: 288px;
    width: 224px;
`