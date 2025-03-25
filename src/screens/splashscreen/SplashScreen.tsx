import {
  ActivityIndicator,
  ActivityIndicatorBase,
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import CommonHeader from "../../components/CommonHeader";
import URLManager from "../../networkLayer/URLManager";
import { COLORS } from "../../resources";

const SplashScreen = () => {
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
  return (
    <View style={{ flex: 1 }}>
      <CommonHeader title={"splash"} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.red} />
        ) : (
          <FlatList
            data={products}
            renderItem={({ item }: any) => {
              return (
                <View>
                  <Image
                    source={{ uri: item.image }}
                    style={{ width: 100, height: 100 }}
                  ></Image>
                  <Text
                    style={{
                      color: "black",
                      fontSize: 20,
                      fontFamily: "Roboto-Regular",
                    }}
                  >
                    {item.title}
                  </Text>
                </View>
              );
            }}
            keyExtractor={(item: any) => item.id}
          />
        )}
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
