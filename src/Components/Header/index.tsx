import React from 'react'
import { Container, Logo } from './styles'

import logo from 'assets/logo.png'
import { SafeAreaView } from 'react-native'


export default function Header() {
    return (
        <Container>
            <Logo source={logo}/>
        </Container>
    )
}