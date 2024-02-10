import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cursos from "../pages/Cursos";
import Descricao from "../pages/Descricao";

const Stack = createNativeStackNavigator();
export default function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Cursos"
                component={Cursos}
                options={{headerShown:false}}
            />

            <Stack.Screen
                name="Descricao"
                component={Descricao}
            />


        </Stack.Navigator>
    )
}