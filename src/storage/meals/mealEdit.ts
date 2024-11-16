import { Meal, MealsDiet } from "@utils/types"
import { mealsGetAll } from "./mealsGetAll"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";


export async function mealEdit(idDiet: number, meal: Meal) {
    try {

        const storedMeals = await mealsGetAll() as unknown as Meal[]

        const newStoredMeals = storedMeals.map(item => {

            if (item.id === idDiet) {

                const updatedMeals = item.meals.map(mealItem => {
                    if (mealItem.id === meal.meals[0].id) {
                        return meal.meals[0];
                    }
                    return mealItem;
                });
        
                return {
                    ...item,
                    meals: updatedMeals, 
                };
            }
            return item; 
        });

        const storage = JSON.stringify([...newStoredMeals])
        await AsyncStorage.setItem(MEAL_COLLECTION, storage);
        
    } catch (error) {
        throw error
    }
}