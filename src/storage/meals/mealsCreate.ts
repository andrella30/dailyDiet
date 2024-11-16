import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { Meal } from "@utils/types";
import { mealsGetAll } from "./mealsGetAll";

export async function mealCreate(newMeal: Meal) {
    try {
        
        const storedMeals = await mealsGetAll() as unknown as Meal[]
        
        const existingDateMeal = storedMeals.find(item => item.date === newMeal.date);

        if(existingDateMeal) {
            existingDateMeal?.meals.push(newMeal.meals[0])
            
            const storage = JSON.stringify([...storedMeals])
            await AsyncStorage.setItem(MEAL_COLLECTION,storage);
            return;
        }

        const storage = JSON.stringify([...storedMeals, newMeal])
        await AsyncStorage.setItem(MEAL_COLLECTION,storage);
        return;

    } catch (error) {
        throw error;
    }
}