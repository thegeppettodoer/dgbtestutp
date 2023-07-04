import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";

import { Ship } from "../../domain/models";

interface DetailScreenProps {
  route: {
    params: {
      ship: Ship;
    };
  };
}

const DetailScreen: React.FC<DetailScreenProps> = ({ route }) => {
  const { ship } = route.params;
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const handleImageLoad = () => {
    setLoading(false);
  };
  const handleImageError = () => {
    setLoading(false);
    setError(true);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.shipName}>{ship.name}</Text>
      {loading && <Text id="loading-text" style={styles.loadingText}>Imagen cargando...</Text>}
      {error && <Text id="error-text" style={styles.loadingText}>Error en la carga...</Text>}

      <Image id="ship-image"
        source={{ uri: ship.image }}
        style={styles.shipImage}
        resizeMode="contain"
        onLoadEnd={() => {
          console.log("onLoadEnd");
          handleImageLoad();
        }}
        onError={(error) => {
          console.log("handleImageError", error);
          handleImageError();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  shipImage: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,

    borderRadius: 10,
  },
  shipName: {
    position: "absolute",
    top: 20,
    left: 20,
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
  },
  loadingText: {
    fontSize: 16,
    color: "blue",
    position: "absolute",
  },
});

export default DetailScreen;
