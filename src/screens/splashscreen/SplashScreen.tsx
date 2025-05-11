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

const SplashScreen = () => {
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
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.COLORS.background }]}
    >
      <View style={styles.inner}>
        <Text style={[FONTS.h1, { color: theme.COLORS.text }]}>
          Themed Full Screen
        </Text>
        <View
          style={[
            styles.card,
            {
              backgroundColor: theme.COLORS.card,
              shadowColor: theme.COLORS.black,
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 2.84,
              elevation: 5,
            },
          ]}
        >
          {/* <Image
           source={ICONS.APP_LOGO_ICON}
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
          /> */}
          <Text style={[FONTS.body4, { color: theme.COLORS.text }]}>
            shashank
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  inner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    padding: 100,
    borderRadius: 12,
    margin: 16,
  },
});
