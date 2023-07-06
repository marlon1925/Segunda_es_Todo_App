import {
  View,
  Text,
  Alert,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import { Button, FAB, Icon } from "@rneui/base";
import { consultar, consultarNoProcesado } from "../../Services/ProductosSrv";
import { useEffect, useState } from "react";
import {
  cerrarSesion,
  RecuperarUsuario,
} from "../../Services/AutenticacionSrv";
import theme from "../../theme/theme";
import { TarjetaPedidos } from "../../Components/Pedidos";
import { PedidoContext } from "../../context/PedidosContext";
import { useContext } from "react";
import Header from "../../Components/Header";
import { TarjetaActivos } from "../../Components/Activos";
export const ListaActivo = ({ navigation }) => {
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
  }, []);

  const recuperarProductos = async () => {
    console.log("------------------------- Recuperar Producto");

    console.log("recupernado datos ", uid2);
    await consultarNoProcesado(setPedidos);
    console.log("OED", pedidos);

  };

  const recuperarUsuario = async () => {
    console.log("------------------------- Recuperar Usuario");

    await RecuperarUsuario(setUser);
    console.log("UID2:", user);
  };

  const Cerrar = () => {
    cerrarSesion();
    setUser();
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.cajaCabecera}>
        <Text style={{ fontSize: theme.fontSize.title,textAlign:"center" }}>Home</Text>
      </View>
      <View style={styles.cajaCuerpo}>
        <TarjetaActivos pedidos={pedidos} navegar={navigation} />
        
      </View>


      <FAB
            
                style={styles.fab}
                color="gray"
                icon={{ name: 'add', color: 'white' }}
                onPress={() => {
                    navigation.navigate("AniadirActivo")
                }}
            />

<Icon
        raised
        name='close'
        type='font-awesome'
        color=''
        onPress={() => cerrarSesion()} />
    </View>
  );
};

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      
    }, 
    fab2: {
      position: 'absolute',
      margin: 16,
      left: 0,
      bottom: 0,
    
  },
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  impar: {
    marginLeft: 1,
    marginBottom: 20,
    marginRight: 20,
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#E09726",
    borderRadius: 5,
  },
  titulo: {
    fontSize: 30,
    fontFamily: "sans-serif-condensed",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#F03E0A",
    letterSpacing: 3,
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
    shadowRadius: 100,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonS: {
    borderRadius: 20,
    padding: 30,
    paddingHorizontal: 40,
    backgroundColor: "#6B7FE3",
    margin: 10,
  },
  buttonP: {
    borderRadius: 20,
    padding: 30,
    paddingHorizontal: 40,
    backgroundColor: "#82B5FA",
    margin: 10,
  },
  cajaCabecera: {
    //backgroundColor: 'cyan',
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 50,
    paddingTop: 10,
  },
  cajaCuerpo: {
    // backgroundColor: 'brown',
    flex: 5,
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 39,
  },
  cajaBotones: {
    //backgroundColor: 'red',
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
  },
});
