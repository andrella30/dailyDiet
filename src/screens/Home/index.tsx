import React, { useCallback, useEffect, useState } from 'react'
import { Container } from './style';
import Header from 'src/Components/Header';
import PercentButton from 'src/Components/PercentButton';
import Button from 'src/Components/Button';

import plusIcon from 'assets/plusIcon.png'
import MealsList from 'src/Components/MealsList';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { mealsGetAll } from '@storage/meals/mealsGetAll';
import { DetailsMealInfo, Meal, MealsDiet } from '@utils/types';
import { MEAL_COLLECTION } from '@storage/storageConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getBetterSequence } from '@utils/index';


export default function Home() {

    const [diets, setDiets] = useState<Meal[]>([])
    const [meals, setMeals] = useState<MealsDiet[]>([])

    const initDetails: DetailsMealInfo = {
        betterSequence: 0,
        dietPercentage: 0,
        dietQtd: 0,
        qtdIsDiet: 0,
        qtdIsNotDiet: 0
    } 
    const [detailsMeals, setDetailsMeals] = useState<DetailsMealInfo>(initDetails)

    const navigation = useNavigation()

    function handleNavigationDetails() {

        navigation.navigate('details', {detailMealsInfo: detailsMeals})
    }

    function handleNavigationMealDetails(meal: MealsDiet, idDiet: number) {
        navigation.navigate('mealDetail', {meal: meal, idDiet: idDiet})
    }

    function handleNavigationMealForm() {
        navigation.navigate('mealForm', {})
    }

    function parseDate(dateStr: string): Date {
        const [day, month, year] = dateStr.split('/').map(Number);        
        return new Date(year, month - 1, day);
    };

    async function getMealsDetails() {
        try {
            
            const mealsDiet = meals.filter((item) => item.isDiet).length
            const measNotDiet = meals.length - mealsDiet
            
            const dietPercentage = ((mealsDiet * 100) / meals.length).toFixed(2)

            const betterSequence = getBetterSequence(meals)

            const detailsMeals = {
                dietQtd: meals.length,
                qtdIsDiet: mealsDiet,
                qtdIsNotDiet: measNotDiet,
                dietPercentage: dietPercentage,
                betterSequence: betterSequence
            } as unknown as DetailsMealInfo
           
            setDetailsMeals(detailsMeals)

        } catch (error) { 

        }
    }


    async function getAllMeals() {
        try {
            const data = await mealsGetAll() as unknown as Meal[]

            data.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());

            if(data.length > 0) {
            const allMeals = data.map(item => item.meals).flat(); 
            
            setMeals(allMeals)
            setDiets(data); 
            }
        } catch (error) {
            throw error
        }
    }

    
    useFocusEffect(
        useCallback(() => {
            getAllMeals();
        }, [])
    );
    
    useEffect(() => {
        if (meals.length > 0) { 
            getMealsDetails();
        }
    }, [meals]);



    return (
        <Container>
            <Header />
            <PercentButton 
                dietPercentage={detailsMeals?.dietPercentage ?? 0}
                onPress={handleNavigationDetails} 
            />
            <Button 
                title='Nova refeição'
                icon={plusIcon}
                onPress={handleNavigationMealForm}
            />

            <MealsList 
                mealsDiet={diets}
                onPress={handleNavigationMealDetails}
                
            />
            
   
            
        </Container>
    )
}