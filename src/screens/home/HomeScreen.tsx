import {
  ActivityIndicator,
  ActivityIndicatorBase,
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import CommonHeader from "../../components/CommonHeader";
import URLManager from "../../networkLayer/URLManager";
import { COLORS, FONTS, ICONS } from "../../resources";
import { useAppTheme } from "../../resources/ThemeContext";
import { useTheme } from "@react-navigation/native";

const HomeScreen = () => {
  const { colors } = useTheme();
  const theme = useAppTheme();

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState();

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      setLoading(true);
      let urlManager = new URLManager();
      return urlManager
        .getProducts()
        .then((res: any) => {
          console.log(res);
          return res.json() as Promise<any>;
        })
        .then(async (res: any) => {
          console.log("Fetch Products", res);
          if (res) {
            setProducts(res);
          }
        })
        .catch((e) => {
          Alert.alert(e.name, e.message);
          return e.response;
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (er) {
      console.log(er);
    }
  }
  const renderItem = ({ item }: { item: any }) => (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.COLORS.card,
          shadowColor: theme.COLORS.black,
        },
      ]}
    >
      <Image
        source={{ uri: item.image }}
        style={{
          width: 100,
          height: 100,
        }}
        resizeMode="contain"
      />
      {/* <Text style={[FONTS.body3, { color: theme.COLORS.text, marginTop: 10 }]}> */}
      <Text style={[FONTS.body4, { color: theme.COLORS.text }]}>
        {item.category}
      </Text>
    </View>
  );
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.COLORS.background }]}
    >
      <Text style={[FONTS.h2, { color: theme.COLORS.text, marginBottom: 16 }]}>
        Product List
      </Text>
      {loading ? (
        <ActivityIndicator size="large" color={theme.COLORS.primary} />
      ) : (
      <FlatList
        data={products}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  inner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    // padding: 20,
  },
  card: {
    padding: 10,
    borderRadius: 12,
    margin: 16,
  },
});
