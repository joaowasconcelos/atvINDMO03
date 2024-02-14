import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import Routes from './src/routes';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
   
      <SafeAreaProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </SafeAreaProvider>


  );
}

