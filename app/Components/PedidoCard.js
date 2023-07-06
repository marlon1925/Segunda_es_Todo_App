import React, { useContext, useEffect, useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";


import Icons from "./Icons";
import StyledText from "./StyledText";

import theme from "../theme/theme";

export default function PedidoCard({
  pedido }) {




    useEffect(() => {
    console.log("..........................................URL",pedido)
     

  }, [])


  return (
    <View style={styles.card}>
      <View style={styles.top}>

        <StyledText bold subtitle2>
          {pedido?.nombre}
        </StyledText>


        <StyledText color={theme.colors.lightgray} bold>
          {pedido?.id_producto_sap}
        </StyledText>


      </View>


      <View style={{ flexDirection: "row", flex: 1 }}>
        <View style={styles.left}>

          <View style={styles.botton}>

            <Image
              style={styles.tinyLogo}
              source={{
                uri: pedido.url,
              }}
            />


            <View style={[styles.data, styles.cantidad]}>
              <StyledText center bold>
                Cant.
              </StyledText>
              <StyledText center>{pedido.cantidad}</StyledText>
            </View>
            <View style={[styles.data, styles.cantidad]}>
              <StyledText center bold>
                Precio
              </StyledText>
              <StyledText center>{pedido.precio}</StyledText>
            </View>


          </View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingBottom: 10,
    paddingHorizontal: 8,
    marginVertical: 1,
    flexDirection: "column",
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "red"
  },
  botton: { flexDirection: "row" },
  left: {
    flex: 8,
  },
  right: {
    right: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttons: {
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  data: {
    flex: 6,
    backgroundColor: "#F0F0F0",
    margin: 2,
  },
  iconwithtext: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  cantidad: {
    flex: 3,
  }, tinyLogo: {
    width: 50,
    height: 50,
  }
});