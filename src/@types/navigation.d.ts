import { Meal } from "@utils/index"
import { DetailsMealInfo, MealsDiet } from "@utils/types"

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined
            details: {
                detailMealsInfo: DetailsMealInfo | undefined
            }
            players: {
                group: string
            }
            mealDetail: {
                meal: Meal
                idDiet: number
            }
            mealForm: {
                isEditing?: boolean
                meal?: MealsDiet
                idDiet?: number
            }
            confirmForm: {
                isDiet: boolean
            }
        }
    }
}