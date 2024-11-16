export type MealsDiet = {
    id: number,
    hour: string
    name: string
    description: string
    date: string
    isDiet: boolean
}


export type Meal = {
    id: number,
    date: string
    meals: MealsDiet[]
}


export type DetailsMealInfo = {
    dietPercentage: number
    dietQtd: number
    qtdIsDiet: number
    qtdIsNotDiet: number
    betterSequence: number
}