import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { getShips } from "../../data/api";
import Ship from "../../domain/models/Ship";
const HomeScreen: React.FC<any> = ({ navigation }) => {
  const [ships, setShips] = useState<Ship[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchShips();
  }, []);

  const fetchShips = async () => {
    try {
      const response = await getShips();
      setShips(response.filter((ship: Ship) => ship.image !== null));      
      setLoading(false);
    } catch (error) {
      console.log("Error fetching ships:", error);
    }
  };

  const handlePressShip = (ship: Ship) => {
    navigation.navigate("Detail", { ship });
  };

  const renderShipItem = ({ item }: { item: Ship }) => {
    return (
      <TouchableOpacity
        onPress={() => handlePressShip(item)}
        style={styles.itemContainer}
      >
        <View style={styles.imageContainer}>
          {loading && item.image ? (
            <ActivityIndicator color="red" size="small" />
          ) : (
            <Image
              source={{ uri: item.image }}
              style={styles.shipImage}
              resizeMode="cover"
            />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={ships}
        keyExtractor={(item) => item.name}
        renderItem={renderShipItem}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No se encontraron imágenes.</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  itemContainer: {
    flex: 1,
    alignItems: "center",
    margin: 8,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 2
  },
  imageContainer: {
    width: "100%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  shipImage: {
    width: "100%",
    height: "100%",
  },
  emptyText: {
    alignSelf: "center",
    marginTop: 16,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;