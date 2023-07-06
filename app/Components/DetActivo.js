import { useEffect } from "react";
import {
  FlatList,
  ScrollView,
  TouchableHighlight,
  StyleSheet,
  View,
  Text,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "../theme/theme";
import PedidoCard from "./PedidoCard";
import StyledText from "./StyledText";

export const TarjetaDetalleActivo = (props) => {
  const Pedido = props.item;
  const ObjPedido = props.objPedido;
  console.log("PEDIDO", Pedido);
  console.log("PEDIDO OBJETO", ObjPedido);
  console.log("PEDIDO OBJETO", ObjPedido);

  return (
    <ScrollView>
      <View style={styles.section}>
        <ScrollView horizontal={true} contentContainerStyle={styles.content}>
          <View style={{ flexDirection: "column" }}>
            <StyledText subtitle bold margin>
              NDonativo{" "}
            </StyledText>
            <StyledText bold margin>
              {ObjPedido.NActivo}
            </StyledText>
          </View>
          <View style={{ flexDirection: "column" }}>
            <StyledText subtitle bold margin>
              Donador{" "}
            </StyledText>
            <StyledText bold margin>
              {ObjPedido.donador}
            </StyledText>
          </View>

          <View style={{ flexDirection: "column" }}>
            <StyledText subtitle bold margin>
              Tipo{" "}
            </StyledText>
            <StyledText bold margin>
              {ObjPedido.Tipo}
            </StyledText>
          </View>

          <View style={{ flexDirection: "column" }}>
            <StyledText subtitle bold margin>
              Descripcion{" "}
            </StyledText>
            <StyledText bold margin>
              {ObjPedido.Descripcion}
            </StyledText>
          </View>

          <View style={{ flexDirection: "column" }}>
            <StyledText subtitle bold margin>
              Razon Social{" "}
            </StyledText>
            <StyledText bold margin>
              {ObjPedido.Razon_Social}
            </StyledText>
          </View>

         
         

          <View style={{ flexDirection: "column" }}>
            <StyledText subtitle bold margin>
              Ubicacion{" "}
            </StyledText>
            <StyledText bold margin>
              {ObjPedido.Ubicacion}
            </StyledText>
          </View>

          <View style={{ flexDirection: "column" }}>
            <StyledText subtitle bold margin>
              Url{" "}
            </StyledText>
            <Text>sfdsfdsr</Text>
            <Image
              style={styles.logo}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/seguridadinformatica-59a75.appspot.com/o/imageA-1.jpeg?alt=media&token=c2a8ba6a-4535-42ea-97db-16e7c2627857",
              }}
            />
          </View>
        </ScrollView>

        <View>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
        </View>
{/* 
        <ScrollView horizontal={true} contentContainerStyle={styles.content}>
          <View style={{ flexDirection: "column" }}>
            <StyledText subtitle bold margin>
              Disponibilidad{" "}
            </StyledText>
            <StyledText bold margin>
              {ObjPedido.Disponibilidad}
            </StyledText>
          </View>
          <View style={{ flexDirection: "column" }}>
            <StyledText subtitle bold margin>
              Integridad{" "}
            </StyledText>
            <StyledText bold margin>
              {ObjPedido.Integridad}
            </StyledText>
          </View>
          <View style={{ flexDirection: "column" }}>
            <StyledText subtitle bold margin>
              Confidencialidad{" "}
            </StyledText>
            <StyledText bold margin>
              {ObjPedido.Confidencialidad}
            </StyledText>
          </View>

          <View style={{ flexDirection: "column" }}>
            <StyledText subtitle bold margin>
              VA{" "}
            </StyledText>
            <StyledText bold margin>
              {ObjPedido.VA}
            </StyledText>
          </View>
        </ScrollView> */}
      </View>

      <View>
        <StyledText subtitle bold margin>
          CLASIFICACION DEL ACTIVO{" "}
        </StyledText>
        <StyledText bold margin>
          {ObjPedido.selectedValue == "Urgente" ? (
            <View style={{ backgroundColor: "red", padding: 20 }}>
              <Text>Critico</Text>
            </View>
          ) : (
            <Text></Text>
          )}
          {ObjPedido.selectedValue == "Medio" ? (
            <View style={{ backgroundColor: "blue", padding: 20 }}>
              <Text>Importante</Text>
            </View>
          ) : (
            <Text></Text>
          )}
          {ObjPedido.selectedValue == "Bajo" ? (
            <View style={{ backgroundColor: "blue", padding: 20 }}>
              <Text>Secundario</Text>
            </View>
          ) : (
            <Text></Text>
          )}

          {/* {ObjPedido.selectedValue} */}
        </StyledText>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    paddingHorizontal: 20,
  },
  item: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "gray",
    padding: 20,
    marginHorizontal: 10,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
});
