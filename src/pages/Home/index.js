import { Text, Button, View, StyleSheet, Image, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"


export default function Home() {

    return (
        <SafeAreaView style={[styles.container, styles.androidSafeArea]}>
            <View>
                <Image source={require("../../assets/logo-senai.png")} style={{ width: 290, height: 120, alignItems: "flex-start", justifyContent: "flex-start", display: "flex" }} ></Image>
            </View>

            <View>
                <Text style={{ fontSize: 19, textAlign: "center" }}>Joao Victor Nascimento Wasconcelos</Text>
                <Text style={{ fontSize: 19, textAlign: "center" }}>Sumaré,30/01/2024</Text>
                <Text style={{ fontSize: 19, textAlign: "center" }}>Escola SENAI Celso Charuri</Text>
                <Text style={{ fontSize: 19, textAlign: "center" }}>Técnico em Desenvolvimento de Sistemas</Text>
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    androidSafeArea: {
        paddingTop: Platform.OS === 'android' ? 35 : 0,
    },
    container: {
        flex: 1,
        display: "flex",
        alignItems: "center",
    },


})