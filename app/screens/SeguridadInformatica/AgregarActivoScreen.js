import { useEffect, useState } from "react";
import {  Picker } from "react-native-web";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  ScrollView,
  Alert
} from "react-native";
import { Card, Text, TextInput, DropDown } from "react-native-paper";
import theme from "../../theme/theme";
import { Button, Icon } from "@rneui/base";
import { AddActive, consultarActivo } from "../../Services/ActivosSrv";
import uuid from "react-native-uuid";
import * as ImagePicker from "expo-image-picker";
import { SubirFoto, SubirIamgen } from "../../Services/ImagesSrv";
import Header from "../../Components/Header";
import { TouchableOpacity } from "react-native-web";
import StyledText from "../../Components/StyledText";
// import QRCode from "react-native-qrcode-svg";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";
import { getLocation } from "../../Services/CoordenadasSrv";

export function AniadirActivos({ route, navigation }) {
  const [Idaux, setId] = useState("A-");
  const [Tipo, setTipo] = useState("");
  const [donador, setdonador] = useState("");
  const [Razon_Social, setRazon_Social] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [Ubicacion, setUbicacion] = useState("");
  const [cantidad, setcantidad] = useState("");
  const [Custodio, setCustodio] = useState("");
  const [Confidencialidad, setConfidencialidad] = useState(0);
  const [Integridad, setIntegridad] = useState(0);
  const [Disponibilidad, setDisponibilidad] = useState(0);
  const [VA, setVA] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedValue, setSelectedValue] = useState("");

  const [iamgeBase64, setImageBase64] = useState("");

  const [Url, setUrl] = useState("");
  const [Id2, setId2] = useState(0);
  useEffect(() => {
    const consulta = async () => {
      await consultarActivo(setId);
    };
    consulta();
  }, []);

  useEffect(() => {
    console.log("Idfuera", Id2);

    console.log(
      parseFloat(Confidencialidad) +
        parseFloat(Integridad) +
        parseFloat(Disponibilidad)
    );
    setVA(
      (
        (parseFloat(Confidencialidad) +
          parseFloat(Integridad) +
          parseFloat(Disponibilidad)) /
        3
      ).toFixed(2)
    );
    console.log("VA", VA);
  }, [Confidencialidad, Integridad, Disponibilidad]);

  const pickImages = async () => {
    let resultado = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
      // base64:true
    });
    console.log("Imagen Uri:", resultado.assets[0].uri);
    await setImageBase64(resultado.assets[0].uri);
    await SubirFoto(resultado.assets[0].uri, Idaux + "", setUrl);
  };

  const AñadirProducto = async() => {
    // SubirIamgen();
    const locationCoords = await getLocation();
    const { latitude, longitude } = locationCoords;
    // Alert.alert(
    //   "Coordenas Capturadas",latitude,"+",longitude
      
    // );
    console.log("latitud:",latitude)
    console.log("lomngitud:",longitude)

    console.log("NUEVO URL", Url);
    console.log("Objeto", {
      NActivo: Idaux,
      Tipo: Tipo,
      coordenadas:locationCoords,
      donador: donador,
      Razon_Social: Razon_Social,
      Descripcion: Descripcion,
      Razon_Social: Razon_Social,
      Descripcion: Descripcion,
      Ubicacion: Ubicacion,
      cantidad: cantidad,
    
      url: Url,
      para: selectedItem,
    });

    AddActive({
      NActivo: Idaux,
      Tipo: Tipo,
      donador: donador,
      coordenadas:locationCoords,
      Razon_Social: Razon_Social,
      Descripcion: Descripcion,
      Razon_Social: Razon_Social,
      Descripcion: Descripcion,
      // Ubicacion: Ubicacion,
      cantidad: cantidad,
      url: Url,
      selectedValue: selectedValue,
      
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Header />
        <StyledText subtitle center>
          {" "}
          INFORMACION GENERAL
        </StyledText>
        <StyledText subtitle> </StyledText>
        <TextInput
          label="N° de Donacion"
          value={Idaux + ""}
          editable={false}
          mode="outlined"
          keyboardType="default"
          textColor="gray"
        />
        <TextInput
          label="Tipo"
          value={Tipo}
          onChangeText={setTipo}
          mode="outlined"
          keyboardType="default"
        />
        <TextInput
          label="Donador"
          value={donador}
          onChangeText={setdonador}
          mode="outlined"
          keyboardType="default"
        />

        <TextInput
          label="Razon Social"
          value={Razon_Social}
          onChangeText={setRazon_Social}
          mode="outlined"
          keyboardType="default"
        />
        <TextInput
          label="Cantidad"
          value={cantidad}
          onChangeText={setcantidad}
          mode="outlined"
          keyboardType="number-pad"
        />

        <TextInput
          label="Descripcion"
          value={Descripcion}
          onChangeText={setDescripcion}
          mode="outlined"
          keyboardType="default"
        />
        {/* <TextInput
          label="Ubicacion"
          value={Ubicacion}
          onChangeText={setUbicacion}
          mode="outlined"
          keyboardType="default"
        /> */}

        {/* <View
          style={{
            flexDirection: "row",
            alignItems: "stretch",
          }}
        >
          <TextInput
            style={{ flex: 1, marginRight: 10 }}
            label="Custodio"
            value={Custodio}
            onChangeText={setCustodio}
            mode="outlined"
            keyboardType="default"
          />
        </View> */}
        <View
          style={{
            alignItems: "center",
            // justifyContent: "center",
          }}
        >
          <Button
            title="Agregar Imagen referencial de la Donacion"
            onPress={() => {
              pickImages();
            }}
            buttonStyle={{
              borderRadius: 10,
              backgroundColor: theme.colors.jade,
              alignSelf: "auto",
            }}
            containerStyle={{
              width: 100,
              paddingTop: 10,
            }}
          />
          
        </View>
       
        <StyledText subtitle center>
          DEFINICION DEL ESTATUS DE LA ENTREGA{" "}
        </StyledText>
        <StyledText subtitle> </StyledText>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Button
            title="Urgente"
            onPress={() => {
              setSelectedValue("Urgente");
            }}
            buttonStyle={{
              borderRadius: 10,
              backgroundColor: "red",
              alignSelf: "auto",
            }}
            containerStyle={{
              width: 100,
              paddingTop: 40,
              paddingHorizontal: 2,
            }}
          />

          <Button
            title="Medio"
            onPress={() => {
              setSelectedValue("Medio");
            }}
            buttonStyle={{
              borderRadius: 10,
              backgroundColor: "blue",
              alignSelf: "auto",
            }}
            containerStyle={{
              width: 110,
              paddingTop: 40,
              paddingHorizontal: 2,
            }}
          />

          <Button
            title="Bajo"
            onPress={() => {
              setSelectedValue("Bajo");
            }}
            buttonStyle={{
              borderRadius: 10,
              backgroundColor: "green",
              alignSelf: "auto",
            }}
            containerStyle={{
              width: 110,
              paddingTop: 40,
              paddingHorizontal: 2,
            }}
          />
        </View>
        <View style={styles.cajaBotones}>
          <Button
            title="Agregar Activo"
            onPress={async() => {
              AñadirProducto();
             
            }}
            buttonStyle={{
              borderRadius: 10,
              backgroundColor: theme.colors.jade,
            }}
            containerStyle={{
              width: 100,
              paddingTop: 40,
              marginLeft: 120,
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    // alignItems: 'stretch',
    justifyContent: "center",
    dColor: "gray",
  },
  cajaBotones: {
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
    flex: 2,
    flexDirection: "row",
  },
  scrollView: {
    // backgroundColor: 'pink',
    marginHorizontal: 10,
  },
});
