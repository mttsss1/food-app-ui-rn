import { useFonts } from 'expo-font';
import { 
  Montserrat_700Bold, 
  Montserrat_600SemiBold, 
  Montserrat_500Medium,
  Montserrat_400Regular
  } from '@expo-google-fonts/montserrat';

import AppLoading from 'expo-app-loading';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Montserrat_500Medium,
    Montserrat_400Regular
  })
  if(!fontsLoaded){
    return <AppLoading/>
  }
  return (
    <Routes/>
  )
}