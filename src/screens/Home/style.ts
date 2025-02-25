import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${ ({theme}) => theme.COLORS.WHITE};
    padding: 24px;
`

export const Title = styled.Text`
    color: '#000';
    font-size: 32px;
`

