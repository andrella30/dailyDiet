import styled from 'styled-components/native'

export const Container = styled.View`
    width: '100%';
    align-items: center;
    justify-content: center;
    background-color: ${ ({theme}) => theme.COLORS.WHITE};
    margin-top: 15px;
`
export const Logo = styled.Image`
    width: 82px;
    height: 37px;
`