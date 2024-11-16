import { Meal } from "@utils/types";
import { mealsGetAll } from "./mealsGetAll";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";


export async function mealDeletaMeal(id: number, idDiet: number) {
    try {

        const storedMeals = await mealsGetAll() as unknown as Meal[]
        
        const getCurrentDiet = storedMeals.filter(item => item.id === idDiet)[0]
        
        const getCurrentMeal = getCurrentDiet.meals.filter(meal => meal.id !== id)

        getCurrentDiet.meals = getCurrentMeal

        
        const newStorage = storedMeals.filter(item => item.meals.length !== 0)

        const storage = JSON.stringify([...newStorage])
        await AsyncStorage.setItem(MEAL_COLLECTION, storage);
        
        return;

    } catch (error) {
        throw error; 
    }
}