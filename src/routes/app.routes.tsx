import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { ConfirmMealRegister } from '@screens/ConfirmMealRegister';
import Details from '@screens/Details';
import Home from '@screens/Home';
import MealDetail from '@screens/MealDetail';
import { MealForm } from '@screens/MealForm';
import { isDate } from 'date-fns';

const {Navigator, Screen} = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen 
                name='home'
                component={Home}
            />

            <Screen 
                name='details'
                component={Details}
            />

            <Screen 
                name='mealDetail'
                component={MealDetail}
            />

            <Screen 
                name='mealForm'
                component={MealForm}
            />

            <Screen 
                name='confirmForm'
                component={ConfirmMealRegister}
            />

        </Navigator>

    )
}