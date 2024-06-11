import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { FontAwesome6 } from "react-native-vector-icons";

const Startchart = ({ navigation }) => {
  const goBack = () => {
    navigation.navigate("VerifyScreen");
  };
  const haldleAccept = () => {
    navigation.navigate("Home");
    // For now let that be our code but we will change it
  };
  const handleDecline = () => {
    navigation.navigate("CheckCode");
  };
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.innerMainContainer}>
          <View style={styles.headerCover}>
            <Pressable style={styles.btnIcon}>
              <FontAwesome6
                name="chevron-left"
                color="white"
                size={20}
                onPress={goBack}
              />
            </Pressable>

            <Pressable style={styles.btnSkip} onPress={haldleAccept}>
              <Text style={styles.headerText}>Skip</Text>
            </Pressable>
          </View>

          <View style={styles.box}>
            <View style={styles.innerBox}>
              <Text style={styles.boxText}>Pass</Text>
            </View>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textOne}>
              We'd like you to share optional diagnostic data about how you use
              Starchat. This information helps us improve your Starchat
              experience.
            </Text>

            <Text style={styles.textTwo}>
              None of this data includes your name, file contents, or
              information about apps unrelated to OfficeComms
            </Text>

            <Pressable style={styles.link}>
              <Text style={styles.linkText}>Learn more</Text>
            </Pressable>
          </View>

          <View style={styles.btnContainer}>
            <Pressable style={styles.btnOne} onPress={haldleAccept}>
              <Text style={styles.btnText}>Accept</Text>
            </Pressable>

            <Pressable style={styles.btnTwo} onPress={handleDecline}>
              <Text style={styles.btnText}>Decline</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "#101223",
  },
  innerMainContainer: {
    marginLeft: 14,
    marginRight: 14,
  },
  headerCover: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 70,
  },
  btnIcon: {
    // marginRight: 240,
  },
  headerText: {
    fontSize: 16,
    color: "white",
  },
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  innerBox: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "orangered",
    justifyContent: "center",
    alignItems: "center",
  },
  boxText: {
    fontSize: 16,
    color: "white",
  },
  textContainer: {
    marginBottom: 210,
  },
  textOne: {
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 20,
    color: "white",
  },
  textTwo: {
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 10,
    color: "white",
  },
  linkText: {
    textAlign: "center",
    color: "#007bff",
    // fontWeight: 10,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  btnOne: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: "#007bff",
  },
  btnTwo: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#007bff",
  },
  btnText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#000",
  },
});
export default Startchart;
