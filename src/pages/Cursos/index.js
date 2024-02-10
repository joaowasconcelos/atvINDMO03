import { Text, Button, View, StyleSheet, ScrollView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function Cursos() {
    const navigation = useNavigation()

    function cursoAdm(){
        const adm = {
            Curso: "TÉCNICO EM ADMINISTRAÇÃO",
            Descricao: "O curso técnico de Administração tem por objetivo habilitar profissionais em realizar e gerir processos administrativos das áreas da indústria e de serviços, utilizando-se de técnicas e tecnologias apropriadas e de padrões éticos, legais, de qualidade e segurança, com responsabilidade social e ambiental.",
            Imagem: require("../../assets/tec.png")
        };
        navigation.navigate("Descricao", { cursoInfo: adm});
    }

    function cursoEletro(){
        const eletro = {
            Curso: "TÉCNICO EM ELETROMECANICA",
            Descricao: "O curso técnico de Eletromecânica tem por objetivo habilitar profissionais no planejamento, no controle e na realização de atividades relativas à manutenção eletromecânica, em conformidade às normas técnicas, ambientais, de qualidade e de segurança e saúde no trabalho.",
            Imagem: require("../../assets/eletro.jpg")
        };
        navigation.navigate("Descricao", { cursoInfo: eletro});
    }

    function cursoAds(){
        const ads = {
            Curso: "TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS",
            Descricao: "O Curso Técnico de Desenvolvimento de Sistemas tem por objetivo habilitar profissionais para analisar requisitos funcionais e não funcionais de produtos, desenvolver e testar sistemas de software, de acordo com as especificações do projeto, considerando as boas práticas do mercado de tecnologia da informação e as necessidades do usuário.."
        };
        navigation.navigate("Descricao", { cursoInfo: ads});
    }

    return (
        <SafeAreaView style={[styles.container, styles.androidSafeArea]}>
            <ScrollView>
                <View style={{ gap: 20, }}>

                    <View style={styles.teste}>
                        <Text style={styles.container1} onPress={cursoAdm}>TÉCNICO EM ADMINISTRAÇÃO</Text>

                    </View>

                    <View style={styles.teste}>
                        <Text style={styles.container1} onPress={cursoEletro}>TÉCNICO EM ELETROMECÂNICA</Text>

                    </View>


                    <View style={styles.teste}>
                        <Text style={styles.container1} onPress={cursoAds}>TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS</Text>

                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    androidSafeArea: {
        paddingTop: Platform.OS === 'android' ? 35 : 0,
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "100%",
        backgroundColor: "#A9A9A9",



    },
    container1: {
        margin: 10,
        height: 30,
        textAlign: "center",
        color: "red",
        fontWeight: "bold",

    },
    Text: {
        height: 150,
        width: 350,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },
    teste: {
        width: 350,
        height: 200,
        backgroundColor: "white",
        borderRadius: 20,
    }
})


