import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';
export type ButtonTypeSizeProps = 'MAX' | 'HALF';

type Props = {
  type: ButtonTypeStyleProps;
  size: ButtonTypeSizeProps;
}

export const Container = styled.View`
    align-items: center;
    justify-content: center;
`

export const UpTitle = styled.Text`
    margin-bottom: 8px;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_1};
`

export const ContainerButton = styled(TouchableOpacity)<Props>`
    flex-direction: row;
    width:  ${({ size }) => size === 'MAX' ? '100%' : '50%' };
    align-items: center;
    justify-content: center;
    background-color: ${({ theme, type }) => type === 'PRIMARY' 
        ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};
    height: 50px;
    border-radius: 10px;
    padding: 12px;
    border-width: 1px;
`

export const Title = styled(Text)<Props>`
    font-size: 14px;
    text-align: center;
    font-weight: bold;
    color: ${({ theme, type }) => type === 'PRIMARY' 
        ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
`

export const Logo = styled.Image`
    width: 18px;
    height: 18px;
`

