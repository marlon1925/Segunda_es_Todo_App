
import { View, Text, Alert, StyleSheet, FlatList, TouchableHighlight, ScrollView } from "react-native"
import { Button, FAB } from "@rneui/base"
import { consultar, consultarNoProcesado } from "../../Services/ProductosSrv"
import { useEffect, useState } from "react"
import { cerrarSesion, RecuperarUsuario } from "../../Services/AutenticacionSrv";
import theme from "../../theme/theme";
import { TarjetaPedidos } from "../../Components/Pedidos";
import { PedidoContext } from "../../context/PedidosContext";
import { useContext } from 'react';
import Header from "../../Components/Header";
export const ListaPedidosNoProcesados = ({ navigation }) => {
    const { user, setUser } = useContext(PedidoContext);
    const [uid2, setUid] = useState("3");
    const [pedidos, setPedidos] = useState([]);
    let pedidos2;



    useEffect(() => {


        const willFocusSubscription = navigation.addListener("focus", () => {
            recuperarUsuario();

            recuperarProductos();
        });
        return willFocusSubscription;
    }, [])


    const recuperarProductos = async () => {
        console.log("------------------------- Recuperar Producto")

        console.log("recupernado datos ", uid2)
        await consultarNoProcesado(setPedidos);
        //console.log("OED", pedidos);
        // console.log("Uid", global.userId )
        // pedidos2 = pedidos.filter(item => item.codigo === "hX4gT8sDdRPCO5N6qt5mykIUa9g2")




    }

    const recuperarUsuario = async () => {
        console.log("------------------------- Recuperar Usuario")

        await RecuperarUsuario(setUser);
        console.log("UID2:", user)
    }

    const Cerrar = () => {
        cerrarSesion();
        setUser();

    }




    return <View style={styles.container}>
        <Header />

        <View style={styles.cajaCabecera} >

            <Text style={{ fontSize: theme.fontSize.title }}>PEDIDOS</Text>
        </View>
        <View style={styles.cajaCuerpo} >


            <TarjetaPedidos pedidos={pedidos} navegar={navigation} />

        </View>
    </View>




}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'stretch',
        justifyContent: 'flex-start'
    },
    impar: {

        marginLeft: 1,
        marginBottom: 20,
        marginRight: 20,
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#E09726',
        borderRadius: 5




    },
    titulo: {
        fontSize: 30,
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#F03E0A',
        letterSpacing: 3


    },
    Inputs: {
        borderBottomColor: "#82B5FA",
        borderBottomWidth: 2,
        borderBottomLeftRadius: 3.7,
        borderBottomRightRadius: 3.7,
        backgroundColor: "#B3DDF2",
        margin: 20,
        marginTop: 2,
        marginLeft: 1,
        shadowColor: "#0000",
        shadowRadius: 100
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    buttonS: {
        borderRadius: 20,
        padding: 30,
        paddingHorizontal: 40,
        backgroundColor: "#6B7FE3",
        margin: 10
    },
    buttonP: {
        borderRadius: 20,
        padding: 30,
        paddingHorizontal: 40,
        backgroundColor: "#82B5FA",
        margin: 10
    },
    cajaCabecera: {
        //backgroundColor: 'cyan',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 50,
        paddingTop: 10,
    },
    cajaCuerpo: {
        // backgroundColor: 'brown',
        flex: 5,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
    titulo: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 39
    },
    cajaBotones: {
        //backgroundColor: 'red',
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1
    }

});
