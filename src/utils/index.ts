import { mealsGetAll } from "@storage/meals/mealsGetAll";
import { Meal, MealsDiet } from "./types";


function parseDate(dateStr: string): Date {
    const [day, month, year] = dateStr.split('/').map(Number);
    return new Date(year, month - 1, day);
};

function getBetterSequence(mealsDiet: MealsDiet[]) {

    let betterSequence = 0
    let isDietSequenceCount = 0

    mealsDiet.map((item) => {

        if (item.isDiet) {
            isDietSequenceCount = isDietSequenceCount + 1

            if (isDietSequenceCount > betterSequence) {
                betterSequence = isDietSequenceCount
            }
        }

        if (!item.isDiet) {
            isDietSequenceCount = 0
        }

    })

    return betterSequence
}

export {
    getBetterSequence
}