import { Modal, Text, TouchableOpacity, View } from "react-native";
import { Container, Logo, Header, TitleContainer, Title, DetailTitle, DetailSubtitle, InfoContainer, DateTitle, IsDietLabelContainer, IsDietContainer, IsDietText, ButtonContainer } from "./styles";
import { BlurView } from 'expo-blur';

import backIcon from 'assets/back-icon.png'
import trashIcon from 'assets/trash.png'
import editIcon from 'assets/edit.png'

import Button from "src/Components/Button";
import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { MealsDiet } from "@utils/types";
import { mealDeletaMeal } from "@storage/meals/mealDeleteMeal";
import { mealEdit } from "@storage/meals/mealEdit";

type RouteParams = {
    meal: MealsDiet
    idDiet: number
}

export default function MealDetail() {

    const [modalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation()

    const route = useRoute()
    const { meal, idDiet } = route.params as RouteParams
        
    function handleNavigationGoBack() {
        navigation.goBack()
    }

    async function handleDeleteMeal() {
        await mealDeletaMeal(meal.id, idDiet)
        setModalVisible(!modalVisible)
        navigation.navigate('home')
    }

    async function handleEditMeal() {
        navigation.navigate('mealForm', {
            isEditing: true,
            meal: meal,
            idDiet: idDiet
        })
    }

    const isDiet = meal.isDiet

    return (
        <> 
        <Container>
            <Header type={isDiet ? "PRIMARY" : "SECONDARY"}> 
                <TouchableOpacity onPress={handleNavigationGoBack}>
                    <Logo source={backIcon} tintColor={'#000'}/>
                </TouchableOpacity>
                <TitleContainer> 
                    <Title> Nova Refeição </Title>
                </TitleContainer>
            </Header>

            <InfoContainer> 
                <DetailTitle>{meal.name}</DetailTitle>
                <DetailSubtitle>{meal.description}</DetailSubtitle> 
            </InfoContainer>

            <InfoContainer> 
                <DateTitle>Date e hora</DateTitle>
                <DetailSubtitle>{meal.date} às {meal.hour}</DetailSubtitle> 
            </InfoContainer>

            <IsDietLabelContainer>
                <IsDietContainer type={isDiet ? "PRIMARY" : "SECONDARY"}/>
                <IsDietText>
                    {isDiet? "dentro da dieta" : "fora da dieta"}
                </IsDietText> 

            </IsDietLabelContainer>

        </Container>
        
        <ButtonContainer> 
            <Button
                title="Editar refeição"
                icon={editIcon}
                onPress={() => handleEditMeal()}
                
            /> 
        </ButtonContainer>
        <ButtonContainer> 
            <Button
                title="Excluir refeição"
                icon={trashIcon}
                type="SECONDARY"
                onPress={() => setModalVisible(!modalVisible)}                
            /> 
        </ButtonContainer>


        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
            <BlurView intensity={50} style={{    
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }}>
            <View style={{    
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 22,
            }}>
                <View style={{
                        margin: 20,
                        backgroundColor: 'white',
                        borderRadius: 20,
                        padding: 35,
                        alignItems: 'center',
                        shadowOffset: {
                        width: 0,
                        height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5,
                        width: 300,
                        height: 200,
                        
                }}>
                    <Text style={{  
                        marginBottom: 15,
                        textAlign: 'center',
                        fontSize: 18,
                        fontWeight: "bold"
                    }}>Deseja realmente excluir o registro da refeição? </Text>

                    <View style={{flexDirection: 'row'}}> 
                        <TouchableOpacity
                            onPress={() => setModalVisible(!modalVisible)}
                            style={{flexDirection: "row"}}
                        >


                            <View style={{
                                backgroundColor: '#FFF', 
                                padding: 12, 
                                borderRadius: 10,   
                                width: 100,
                                borderWidth: 1,
                                margin: 12                     
                            }}>
                                <Text style={{
                                    textAlign: 'center',
                                }}>
                                    Cancelar
                                </Text>

                            </View>

                        </TouchableOpacity>
                        
                        <TouchableOpacity
                            onPress={() => handleDeleteMeal()}
                            style={{flexDirection: "row"}}
                        >
                            <View style={{
                                    backgroundColor: '#333638', 
                                    padding: 12, 
                                    borderRadius: 10,  
                                    width: 100,
                                    borderWidth: 1,
                                    margin: 12                          
                                }}>
                                    <Text style={{
                                        textAlign: 'center',
                                        color: '#FFF'
                                    }}>
                                        Sim, excluir
                                    </Text>

                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </BlurView>
      </Modal>

        </>

    )

}
