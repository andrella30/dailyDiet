import { SafeAreaView, View } from 'react-native';
import { Container, ContainerInfo, ContainerUp, Header, InfoCardMax, InfoCardMin, InfoText, Logo, SubTitle, Title } from './style';

import backIcon from 'assets/back-icon.png'
import { useNavigation, useRoute } from '@react-navigation/native';
import { DetailsMealInfo } from '@utils/types';
import React from 'react';

type RouteParams = {
    detailMealsInfo: DetailsMealInfo
}

export default function Details() {
    const navigation = useNavigation()

    const route = useRoute()
    const { detailMealsInfo } = route.params as RouteParams

    const { dietQtd, dietPercentage, qtdIsNotDiet, qtdIsDiet, betterSequence } = detailMealsInfo

    const colorType = dietPercentage > 50 ? 'PRIMARY' : 'SECONDARY'

    function handleGoBackPage() {
        navigation.goBack()
    }

    return (
        <> 
            <Container type={colorType}> 
                <ContainerUp> 
                    <Header onPress={handleGoBackPage}>
                        <Logo source={backIcon} tintColor={
                            colorType === 'SECONDARY' ? 'red' : 'green'
                        }/>
                    </Header>
                        <Title> {dietPercentage}% </Title>
                        <SubTitle> das refeições do dia </SubTitle>
                </ContainerUp>
                
                <ContainerInfo> 
                    <InfoText> Estatísticas gerais </InfoText>
                    
                    <InfoCardMax> 
                        <Title> {betterSequence} </Title>
                        <SubTitle> melhor sequência de pratos na dieta </SubTitle>
                    </InfoCardMax>

                    <InfoCardMax> 
                        <Title> {dietQtd} </Title>
                        <SubTitle> refeições registradas </SubTitle>
                    </InfoCardMax>

                    <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}> 
                        <InfoCardMin type='PRIMARY'>
                            <Title> {qtdIsDiet} </Title>
                            <SubTitle> refeições dentro da dieta </SubTitle>

                        </InfoCardMin>

                        <InfoCardMin type='SECONDARY'>
                            <Title> {qtdIsNotDiet} </Title>
                            <SubTitle> refeições fora da dieta </SubTitle>

                        </InfoCardMin>
                    </View>
                
                </ContainerInfo>
            
            </Container>
        </>


    )
}