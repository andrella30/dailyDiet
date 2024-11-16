import { ButtonText, CircularIcon, Container, ContainerInput, DateInput, DescriptionInput, ErrorText, FormContainer, Header, InputTitle, IsDietContainer, IsNotDietContainer, Logo, RowContainer, Title, TitleContainer } from "./style";

import { TouchableOpacity, View } from "react-native";


import backIcon from 'assets/back-icon.png'
import React, { useEffect, useState } from "react";
import Button from "src/Components/Button";
import { isValid, parse } from "date-fns";

import { useNavigation, useRoute } from "@react-navigation/native";
import { mealCreate } from "@storage/meals/mealsCreate";
import { Meal, MealsDiet } from "@utils/types";
import { mealEdit } from "@storage/meals/mealEdit";

type DietMeal = 'DIET' | 'NOTDIET';

type RouteParams = {
    isEditing?: boolean
    meal?: MealsDiet
    idDiet?: number
}

export function MealForm() {
    
    const route = useRoute()
    const { meal, isEditing, idDiet } = route.params as RouteParams
    
    const [isDiet, setIsDiet] = useState<boolean>(false)
    const [isNotDiet, setIsNotDiet] = useState<boolean>(false)
    const [mealHour, setMealHour] = useState<string>('')
    const [mealDate, setMealDate] = useState<string>('')
    const [mealName, setMealName] = useState<string>('')
    const [mealDescription, setMealDescription] = useState<string>('')
    const [errorMensage, setErrorMensage] = useState<string>('')




    function setDietMeal(diet: DietMeal) {
        if(diet === "DIET") {
            setIsDiet(true)
            setIsNotDiet(false)
            return
        }

        if(diet === "NOTDIET") {
            setIsDiet(false)
            setIsNotDiet(true)
            return
        }

    }

    function handleSetDate(dateString: string) {
        try {

            const parsedDate = parse(dateString, 'dd/MM/yyyy', new Date());
            const valid = isValid(parsedDate);

            if(valid) { 
                setMealDate(dateString)
                return
            }

            setMealDate('')
            return
        
        } catch (error) {
            throw error
        }
    }

    function handleSetTime(hourString: string) {
 
        const parsedTime = parse(hourString, 'HH:mm', new Date());

        const valid = isValid(parsedTime)
        
        const hours = parsedTime.getHours().toString().padStart(2, '0');
        const minutes = parsedTime.getMinutes().toString().padStart(2, '0');
        const formattedTime = `${hours}:${minutes}`;

        valid ? setMealHour(formattedTime) : setMealHour('')
        return formattedTime
    }

    async function handleSaveMeal() {
        
        if(mealName.length === 0) {
            setErrorMensage('Nome vazio')
            return
        }

        if(mealDescription.length === 0) {
            setErrorMensage('Descrição vazia')
            return
        }

        if(mealDate.length === 0) {
            setErrorMensage('Data inválida')
            return
        }

        if(mealHour.length === 0) {
            setErrorMensage('Hora inválida')
            return
        }

        if(isDiet === isNotDiet) {
            setErrorMensage('Selecione se refeição está dentro da dieta')
            return
        }

        setErrorMensage('')


        if(isEditing) {
            const diet: Meal = {
                id: idDiet!,
                date: mealDate,
                meals: [
                    {
                        id: meal!.id,
                        name: mealName,
                        description: mealDescription,
                        hour: mealHour,
                        date: mealDate,
                        isDiet: isDiet ? true : false
                    }
                ]

            }
            await mealEdit(idDiet!, diet!)
            navigation.navigate('confirmForm', {isDiet: isDiet})
            return
        }

        const diet: Meal = {
            id: new Date().getTime(),
            date: mealDate,
            meals: [
                {
                    id: new Date().getTime() + 10,
                    name: mealName,
                    description: mealDescription,
                    hour: mealHour,
                    date: mealDate,
                    isDiet: isDiet ? true : false
                }
            ]

        }

        await mealCreate(diet)
        navigation.navigate('confirmForm', {isDiet: isDiet})

    }

    const navigation = useNavigation()

    function handleNavigationGoBack() {
        navigation.goBack()
    }

    useEffect(() => {
        if(isEditing) {
            setMealName(meal!.name)
            setMealDescription(meal!.description)
            setMealDate(meal!.date)
            setMealHour(meal!.hour)
            meal!.isDiet ? setIsDiet(true) : setIsNotDiet(true) 
        }
    }, [])

    return (

        <Container>
            <Header>
                <TouchableOpacity onPress={handleNavigationGoBack}>
                    <Logo source={backIcon} tintColor={'#000'}/>
                </TouchableOpacity>
                <TitleContainer> 
                    <Title> {isEditing ? "Editar Refeição" :  "Nova Refeição"}</Title>
                </TitleContainer>
            </Header>

            <FormContainer> 
                
                <InputTitle> Nome </InputTitle>
                <ContainerInput 
                    onChangeText={setMealName}
                    value={mealName}
                />

                <InputTitle> Descrição </InputTitle>
                <DescriptionInput 
                    onChangeText={setMealDescription}
                    value={mealDescription}
                    style={{ textAlignVertical: 'top' }}
                /> 
                
                <RowContainer>
                    <View> 
                        <InputTitle> Data </InputTitle>
                        <DateInput 
                            mask="DD/MM/YYYY"
                            type="date"
                            options={{
                                dateFormat: 'DD/MM/YYYY',
                            }}
                            onChangeText={handleSetDate}
                            value={mealDate}
                            keyboardType="numeric"                
                        />
                    </View>
                
                    <View> 
                        <InputTitle> Hora </InputTitle>
                        <DateInput 
                            type="custom"
                            mask="99:99"
                            onChangeText={handleSetTime}
                            value={mealHour}
                            keyboardType="numeric"
                        />

                    </View>

                </RowContainer>
                
                <InputTitle style={{marginBottom: 5}}> Está dentro da dieta? </InputTitle>
                <RowContainer> 
                    <IsDietContainer isActive={isDiet} onPress={() => setDietMeal("DIET")}>
                        <CircularIcon type="PRIMARY"/>
                        <ButtonText> Sim </ButtonText>
                    </IsDietContainer>
                    <IsNotDietContainer isActive={isNotDiet} onPress={() =>setDietMeal("NOTDIET")}>
                        <CircularIcon type="SECONDARY"/>
                        <ButtonText> Não </ButtonText>
                    </IsNotDietContainer>
                </RowContainer>
                
                {errorMensage.length > 0 && <ErrorText> {errorMensage} </ErrorText>}
                <View style={{marginTop: 50}}>
                    <Button
                        title="Cadastrar refeição"
                        onPress={() => {handleSaveMeal()}}
                    /> 
                </View>

            </FormContainer>

        </Container>
    )

}