import React from "react";

import { Container, Logo, Title, Subtitle } from "./styles";
import Button from "src/Components/Button";

import illuistrationDiet from 'assets/dietIlustration.png'
import notDietIllustration from 'assets/notDietIllustration.png'
import { useNavigation, useRoute } from "@react-navigation/native";

export function ConfirmMealRegister() {
    
    const route = useRoute();
    const { isDiet } = route.params; 

    const navigation = useNavigation()

    function handlePressGoBack() {
        navigation.navigate('home')
    }
    
    return (
        <Container>
            {isDiet ? 
                <>
                <Title type="PRIMARY">Continue assim!</Title>
                <Subtitle>Você continua dentro da dieta. Muito bem!</Subtitle>
                <Logo source={illuistrationDiet}/> 
                </>
            :
                <>
                <Title type="SECONDARY">Que pena!</Title>
                <Subtitle>Você saiu da dieta dessa vez, mas continue se esforçando e não desiste!</Subtitle>
                <Logo source={notDietIllustration}/> 
                </>
            }
            <Button 
                title="Ir para a página inicial"
                size="HALF"
                style={{marginTop: 60}}
                onPress={handlePressGoBack}
            />
        </Container>
    )
}