import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/Navigation';
import { NavigationContainer } from '@react-navigation/native';

// URL base que será usada para acessar a api
// API retorna dicas de atividades para se fazer de acordo com o número de participantes
// axios.defaults.baseURL = 'https://www.boredapi.com/api/activity?participants=1';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
