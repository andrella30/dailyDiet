import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'


export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps;
  }

export const ContainerButton = styled(TouchableOpacity)<Props>`
    width: 100%;
    margin: 32px 0;
    background-color: ${({ theme, type }) => type === 'PRIMARY' 
        ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    height: 136px;
    border-radius: 10px;
    padding: 12px;
`
export const ContainerIcon = styled.View`
    flex-direction: row;
    justify-content: flex-end;
`

export const Logo = styled.Image`
    width: 24px;
    height: 24px;
`
export const Title = styled.Text`
    font-size: 32px;
    text-align: center;
    font-weight: bold;
`

export const Subtitle = styled.Text`
    font-size: 14px;
    text-align: center;
`