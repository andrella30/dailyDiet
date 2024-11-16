import { TouchableOpacity, View } from 'react-native';
import { MaskedTextInput } from 'react-native-mask-text';
import styled from 'styled-components/native'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type?: ButtonTypeStyleProps
    isActive?: boolean
}

export const Container = styled.View`
    flex: 1;
    background-color: ${ ({theme}) => theme.COLORS.GRAY_4};
`

export const Header = styled.View`
    margin-top: 38px;
    background-color: ${ ({theme}) => theme.COLORS.GRAY_4};
    padding: 24px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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

export const FormContainer = styled.View`
    flex: 1;
    background-color: ${ ({theme}) => theme.COLORS.WHITE};
    border-radius: 10px;
    padding: 24px;
`

export const InputTitle = styled.Text`
    font-size: 14px;
    font-weight: bold;
`

export const DescriptionInput = styled.TextInput`
  height: 150px;        
  width: 100%;          
  border-color: ${ ({theme}) => theme.COLORS.GRAY_3};   
  border-width: 1px;    
  padding: 16px;        
  font-size: 18px;      
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  border-radius: 10px;  
  margin-bottom: 20px;
  
  
`

export const RowContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
`

export const DateInput = styled(MaskedTextInput)`
    width: 160px;
    height: 58px;
    background-color: ${ ({theme}) => theme.COLORS.WHITE};
    border-width: 1px;   
    border-color: ${ ({theme}) => theme.COLORS.GRAY_3}; 
    font-size: 16px;
    
    border-radius: 6px;
    padding: 16px;
`

export const ContainerInput = styled.TextInput`
    flex: 1;
    min-height: 56px;
    max-height: 56px;

    background-color: ${ ({theme}) => theme.COLORS.WHITE};
    border: 1px;
    border-color: ${ ({theme}) => theme.COLORS.GRAY_3}; 
    font-size: 16px;
    
    border-radius: 6px;
    padding: 16px;
    margin-bottom: 20px;
`
export const IsDietContainer = styled(TouchableOpacity)<Props>`
    width: 160px;
    height: 58px;
    background-color: ${ ({theme, isActive}) =>  isActive
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.GRAY_5
    };
    border-color: ${ ({theme, isActive}) => isActive
        ? theme.COLORS.GREEN_DARK
        : theme.COLORS.GRAY_5
    };
    border-width: 1px;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    flex-direction: row;
`

export const IsNotDietContainer = styled(TouchableOpacity)<Props>`
    width: 160px;
    height: 58px;
    background-color: ${ ({theme, isActive}) => isActive
        ? theme.COLORS.RED_LIGHT
        : theme.COLORS.GRAY_5
    };
    border-color: ${ ({theme, isActive}) => isActive
        ? theme.COLORS.RED_DARK
        : theme.COLORS.GRAY_5
    };
    border-width: 1px;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    flex-direction: row;
`

export const CircularIcon = styled(View)<Props>`
    background-color: ${ ({theme, type}) => type === 'PRIMARY' 
        ? theme.COLORS.GREEN_DARK
        : theme.COLORS.RED_DARK
    };
    width: 10px;
    height: 10px;
    border-radius: 15px;
    margin-right: 5px;
`

export const ButtonText = styled.Text`
    text-align: center;
    font-size: 14px;
    font-weight: bold;
`

export const ErrorText = styled.Text`
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    margin-top: 50px;
    color: red;
`
