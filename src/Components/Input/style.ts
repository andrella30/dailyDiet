import styled from 'styled-components/native'

export const ContainerInput = styled.TextInput`
    flex: 1;
    min-height: 56px;
    max-height: 56px;

    background-color: ${ ({theme}) => theme.COLORS.WHITE};
    border: 1px;
    color: ${ ({theme}) => theme.COLORS.GRAY_1};
    font-size: 16px;
    
    
    border-radius: 6px;
    padding: 16px;

`