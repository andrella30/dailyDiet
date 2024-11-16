
import {SafeAreaView, StatusBar} from 'react-native'
import Home from '@screens/Home';

import theme from './src/theme'

import {ThemeProvider} from 'styled-components'
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'
import { Loading } from 'src/Components/Loading';
import Details from '@screens/Details';
import { MealForm } from '@screens/MealForm';
import { ConfirmMealRegister } from '@screens/ConfirmMealRegister';
import MealDetail from '@screens/MealDetail';
import { Routes } from '@routes/index';

export default function App() {

  const [fontsLoaded] = useFonts({NunitoSans_400Regular, NunitoSans_700Bold})

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle={'dark-content'}
        backgroundColor='transparent'
        translucent={true}
      />
      {fontsLoaded? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}

