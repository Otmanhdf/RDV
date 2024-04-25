import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
} from "react-native";
import Swiper from "react-native-swiper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { before, after, Typ } from "./blood.js";

const CARD_WIDTH = Math.min(Dimensions.get("screen").width * 0.97 - 20, 400);
export default function Guidance({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerAction}></View>

            <Text style={styles.headerTitle}>
              Blood donation: Morocco needs more than{"\n"} 1,000 donations per
              day for self-sufficiency
            </Text>

            <View
              style={[styles.headerAction, { alignItems: "flex-end" }]}
            ></View>
          </View>

          <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
            <View style={styles.photos}>
              <View style={styles.photosTop}></View>

              <Swiper
                renderPagination={(index, total) => (
                  <View style={styles.photosPagination}>
                    <Text style={styles.photosPaginationText}>
                      {index + 1} of {total}
                    </Text>
                  </View>
                )}
              >
                <Image
                  alt=""
                  source={require("./../assets/td.jpeg")}
                  style={styles.photosImg}
                />
                <Image
                  alt=""
                  source={require("./../assets/tf.jpeg")}
                  style={styles.photosImg}
                />
                <Image
                  alt=""
                  source={require("./../assets/te.jpeg")}
                  style={styles.photosImg}
                />
                <Image
                  alt=""
                  source={require("./../assets/tb.jpeg")}
                  style={styles.photosImg}
                />
                <Image
                  alt=""
                  source={require("./../assets/th.jpeg")}
                  style={styles.photosImg}
                />
              </Swiper>
            </View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("BlooddDC");
              }}
              style={styles.picker}
            >
              <View style={styles.pickerDates}>
                <Image
                  alt=""
                  resizeMode="contain"
                  style={styles.headerImg}
                  source={require("../assets/gb.png")}
                ></Image>
              </View>

              <View style={styles.pickerAction}></View>
            </TouchableOpacity>
            <View style={styles.info}>
              {/* <Text style={styles.infoTitle}>About</Text> */}

              <Text style={styles.infoDescription}>
                Blood, a vital material for the human body. Human subsistence
                depends on this expensive material, difficult to have and easy
                to lose. This matter has constituents and functions very
                complex, most of which are, to date, irreplaceable. Currently,
                the processes biotechnologies allow the production of certain
                specific substitute products.
              </Text>
            </View>

            <View style={styles.list}>
              <View style={styles.listHeader}></View>

              <ScrollView
                contentContainerStyle={styles.listContent}
                // horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {before.map((item, index) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("BeforeD");
                    }}
                  >
                    <View style={styles.card}>
                      <View style={styles.cardTop}>
                        <View style={styles.cardIcon}>
                          <MaterialCommunityIcons
                            name={item.icon}
                            size={24}
                            color="black"
                          />
                        </View>

                        <View style={styles.cardBody}>
                          <Text style={styles.cardTitle}>
                            {item.name.toUpperCase()}
                          </Text>

                          <Text style={styles.cardSubtitle}>
                            {item.description}
                          </Text>
                        </View>
                      </View>

                      <View style={styles.cardFooter}></View>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            <View style={styles.list}>
              <View style={styles.listHeader}></View>
              <ScrollView
                contentContainerStyle={styles.listContent}
                // horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {after.map((item, index) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("AfterD");
                    }}
                  >
                    <View style={styles.card}>
                      <View style={styles.cardTop}>
                        <View style={styles.cardIcon}>
                          <MaterialCommunityIcons
                            name={item.icon}
                            size={24}
                            color="black"
                          />
                        </View>
                        <View style={styles.cardBody}>
                          <Text style={styles.cardTitle}>{item.name}</Text>
                          <Text style={styles.cardSubtitle}>
                            {item.description}
                          </Text>
                        </View>
                      </View>
                      <View style={styles.cardFooter}></View>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            <View style={styles.list}>
              <View style={styles.listHeader}></View>

              <ScrollView
                contentContainerStyle={styles.listContent}
                // horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {Typ.map((item, index) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Type");
                    }}
                  >
                    <View style={styles.card}>
                      <View style={styles.cardTop}>
                        <View style={styles.cardIcon}>
                          <MaterialCommunityIcons
                            name={item.icon}
                            size={24}
                            color="black"
                          />
                        </View>

                        <View style={styles.cardBody}>
                          <Text style={styles.cardTitle}>
                            {item.name.toUpperCase()}
                          </Text>

                          <Text style={styles.cardSubtitle}>
                            {item.description}
                          </Text>
                        </View>
                      </View>

                      <View style={styles.cardFooter}></View>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
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
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
    paddingHorizontal: 16,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  /** Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerAction: {
    width: 40,
    height: 40,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#000",
    textAlign: "center",
    marginVertical: 8,
  },
  /** Photos */
  photos: {
    marginTop: 12,
    position: "relative",
    height: 240,
    overflow: "hidden",
    borderRadius: 12,
  },
  photosTop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  photosTopItem: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  photosPagination: {
    position: "absolute",
    bottom: 12,
    right: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#000",
    borderRadius: 12,
  },
  photosPaginationText: {
    fontWeight: "600",
    fontSize: 14,
    color: "#fbfbfb",
  },
  photosImg: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    width: "100%",
    height: 240,
  },
  /** Picker */
  picker: {
    marginTop: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ff8080",
  },
  pickerDates: {
    marginLeft: 12,
  },

  pickerAction: {
    marginLeft: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  /** Info */
  info: {
    marginTop: 12,
    backgroundColor: "#ff7d7d",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 15,
  },

  infoRating: {
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  infoRatingLabel: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#000",
    marginRight: 2,
  },
  infoRatingText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#8e8e93",
    marginLeft: 2,
  },
  infoDescription: {
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 18,
    letterSpacing: -0.078,
    color: "white",
  },

  /** Button */
  formAction: {
    flex: 1,
    marginVertical: 20,
    position: "absolute",
    bottom: 2,
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
  headerImg: {
    width: 400,
    height: 40,
    alignSelf: "center",
    marginBottom: 2,
    marginLeft: -70,
  },

  list: {
    marginBottom: 24,
  },
  listHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 22,
    color: "#121a26",
  },
  listAction: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    color: "#778599",
  },
  listContent: {
    gap: 10,
    // paddingHorizontal: 5,
  },

  /** Card */
  card: {
    width: CARD_WIDTH,
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderRadius: 12,
    backgroundColor: "#ff9b94",
    // marginHorizontal: 6,
    shadowColor: "#90a0ca",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1,
  },
  cardTop: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardIcon: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eff1f5",
  },
  cardBody: {
    paddingLeft: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 18,
    color: "#121a26",
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 18,
    color: "#e6e6e6",
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
    marginTop: 10,
  },
  formAction: {
    flex: 1,
    marginVertical: 20,
    position: "absolute",
    bottom: -8,
    left: Dimensions.get("window").width / 3.5,
  },
});
