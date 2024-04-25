import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";

export default function Type({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentHeader}>
        <Text style={styles.title}>The 8 main blood types</Text>
      </View>
      <View style={styles.hero}>
        <Image
          source={require("../assets/type.png")}
          style={styles.heroImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.contentHeader}>
        <Text style={styles.title}>
          <View style={styles.appName}>
            <Text style={styles.appNameText}>
              How long does blood {"\n"}last after it’s been donated?
            </Text>
          </View>
        </Text>
        <Text style={styles.text}>
          <Text style={{ fontSize: 17 }}>
            Blood components have a limited shelf life:{"\n"}
          </Text>
        </Text>
        <View>
          <Text>- red blood cells can be stored for up to 35 days.{"\n"}</Text>
          <Text>- platelets can be stored for up to 7 days.{"\n"}</Text>
          <Text>- plasma can be stored for up to 3 years.</Text>
        </View>
        <View style={styles.formAction}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <View style={styles.btn}>
              <Text style={styles.btnText}>Go Back</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    height: Dimensions.get("screen"),
    paddingVertical: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: "500",
    color: "#281b52",
    textAlign: "center",
    marginBottom: 12,
    lineHeight: 40,
  },
  text: {
    paddingVertical: 30,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "400",
    color: "red",
    textAlign: "center",
  },
  /** Hero */
  hero: {
    // backgroundColor: '#c6ecd9',
    margin: 20,
    borderRadius: 20,
    padding: 0,
  },
  heroImage: {
    width: "100%",
    height: 300,
  },
  /** Content */
  content: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  contentHeader: {
    paddingHorizontal: 24,
  },
  appName: {
    backgroundColor: "#fff2dd",
    transform: [
      {
        rotate: "-2deg",
      },
    ],
    paddingHorizontal: 6,
  },
  appNameText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#281b52",
  },
  /** Button */
  button: {
    backgroundColor: "#cc0d00",
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#fff",
  },
  formAction: {
    flex: 1,
    marginVertical: 20,
    position: "absolute",
    bottom: -80,
    left: Dimensions.get("window").width / 3,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderWidth: 1,
    backgroundColor: "#ff4032",
    borderColor: "#ff4032",
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "600",
    color: "#fff",
  },
});
