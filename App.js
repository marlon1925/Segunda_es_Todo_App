import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { Home } from './app/screens/HomeScreen'
//import { Pedidos } from './app/screens/PedidosScreen';
import { loadConfiguration } from "./app/utils/FirebaseConfig";
import { LoginForm } from "./app/screens/LoginScreen/LoginScreen";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { Registrar } from "./app/screens/LoginScreen/RegistrarUsuario";
import { ReseteoForm } from "./app/screens/LoginScreen/ReseteoCorreoScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";

import theme from "./app/theme/theme";
import { PedidoContext } from "./app/context/PedidosContext";
import { ListaPedidosNoProcesados } from "./app/screens/TiposPedidoScreen/PedidosNoProcesadosScreen";
import { ListaPedidosProcesados } from "./app/screens/TiposPedidoScreen/PedidosProcesadosScreen";
import { doc, getDoc } from "firebase/firestore";
/*WATSON IMPORTACIONES */
import { AniadirActivos } from "./app/screens/SeguridadInformatica/AgregarActivoScreen";
import { ListaActivo } from "./app/screens/SeguridadInformatica/ListaActivosScreen";
import { DetalleActivo } from "./app/screens/SeguridadInformatica/DetalleActivo";
import { FontsLoader } from "./app/Components/FontsLoader";
const StackManjActivos = createNativeStackNavigator();
const StackMoProd = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const StackClient = createNativeStackNavigator();
const StackerPedidos = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
const TabWatson = createBottomTabNavigator();

const Watson = () => {
  return (
    <TabWatson.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.colors.morado,
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          // position: 'absolute',
          backgroundColor: "#FBFBFF",
          height: 60,
        },
        tabBarHideOnKeyboard: true,
        headerShown: false,
        // tabBarShowLabel: false,
      })}
    >
      <TabWatson.Screen
        name="ManejoActivos"
        component={ManejoActivos}
        options={{
          headerShown: false,
          title: "Menu",
          tabBarIcon: () => {
            return <Icon name="menu" size={24} color="black" type="Entypo" />;
          },
        }}
      />
      <TabWatson.Screen
        name="ManejoActivos1"
        component={ManejoActivos}
        options={{
          headerShown: false,
          title: "Carrito",
          tabBarIcon: () => {
            return (
              <Icon
                name="shoppingcart"
                size={24}
                color="black"
                type="ant-design"
              />
            );
          },
        }}
      />
      <TabWatson.Screen
        name="ManejoActivos2"
        component={ManejoActivos}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: () => {
            return <Icon name="home" size={24} color="black" type="Entypo" />;
          },
        }}
      />
      <TabWatson.Screen
        name="ManejoActivos3"
        component={ManejoActivos}
        options={{
          headerShown: false,
          title: "canjear",
          tabBarIcon: () => {
            return (
              <Icon name="gift" size={24} color="black" type="ant-design" />
            );
          },
        }}
      />

      <TabWatson.Screen
        name="ManejoActivos4"
        component={ManejoActivos}
        options={{
          headerShown: false,
          title: "usuario",
          tabBarIcon: () => {
            return (
              <Icon name="user" size={24} color="black" type="ant-design" />
            );
          },
        }}
      />
    </TabWatson.Navigator>
  );
};

const ManejoActivos = () => {
  return (
    <StackManjActivos.Navigator>
      <StackManjActivos.Screen
        name="ListaActivos"
        component={ListaActivo}
        options={{
          title: "ListaActivoScreen",
          headerShown: false,
        }}
      />
      <StackManjActivos.Screen
        name="AniadirActivo"
        options={{
          headerShown: false,
        }}
        component={AniadirActivos}
      />
      <StackManjActivos.Screen
        name="DetalleActivo"
        options={{
          headerShown: false,
        }}
        component={DetalleActivo}
      />
    </StackManjActivos.Navigator>
  );
};

const LoginNav = () => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="LoginNav"
        options={{
          headerShown: false,
        }}
        component={LoginForm}
      />
      <LoginStack.Screen
        name="RegistrarNav"
        options={{
          headerShown: false,
        }}
        component={Registrar}
      />

      <LoginStack.Screen
        name="ReseteoNav"
        options={{
          headerShown: false,
        }}
        component={ReseteoForm}
      />
    </LoginStack.Navigator>
  );
};

const verficarFire = async (fnSetLogin, id) => {
  const docRef = doc(global.dbCon, "Administradores", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    fnSetLogin(true);
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};

export default function App() {
  const PedidosData = {
    productos: [],
  };

  const [Login, setlogin] = useState(false);

  const [user, setUser] = useState();

  const registarObserver = () => {
    const auth = getAuth();
    if (!global.DesSuscribirObserver) {
      global.DesSuscribirObserver = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User

          const uid = user.uid;
          console.log("Observer Cambia !!!!a sing in1");
          verficarFire(setlogin, uid);

          console.log("L,", Login);
          // ...
        } else {
          // User is signed out
          // ...
          console.log("Observer Cambia !!!!a sing out");
          setlogin(false);
        }
      });
    }
  };

  loadConfiguration();
  registarObserver();

  return (
    <PedidoContext.Provider value={{ user, setUser }}>
      <FontsLoader>
        <NavigationContainer>
          <StatusBar
            style={{
              flex: 1,
              backgroundColor: "#62CBDE",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
          {Login ? <Watson /> : <LoginNav />}
        </NavigationContainer>
      </FontsLoader>
    </PedidoContext.Provider>
  );
}
