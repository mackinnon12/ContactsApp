import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  Pressable,
  Image,
} from "react-native";
import Contacts from "./components/Contacts";
import Search from "./components/Search";

const Stack = createNativeStackNavigator();

// This is the main page of the app
const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.textTitle}>Contacts</Text>
      </View>

      <Pressable
        style={styles.plusButton}
        onPress={() => navigation.navigate("NewContact")}
      >
        <Text style={styles.plusButtonText}>+</Text>
      </Pressable>

      <View style={styles.searchContainer}>
        <Search />
      </View>

      <View style={styles.contactsContainer}>
        <Contacts text={"Jacob MacKinnon"} />
        <Contacts text={"Jacob MacKinnon"} />
        <Contacts text={"Jacob MacKinnon"} />
      </View>
    </View>
  );
};

// Add New Contact Page (new is for New Contact)
const NewContact = ({ navigation, route }) => {
  return (
    // Title
    <View style={styles.mainContainer}>
      <View style={styles.newTitleContainer}>
        <Text style={styles.newTextTitle}>New Contact</Text>
      </View>
      {/* Cancel Button */}
      <View style={styles.newCancelBut}>
        <Pressable
          style={styles.cancelButton}
          onPress={() => cancelConfirm({ navigation })}
        >
          <Text style={styles.cancelButText}>Cancel</Text>
        </Pressable>
      </View>
      {/* Done Button */}
      <View style={styles.newDoneBut}>
        <Pressable
          style={styles.doneButton}
          onPress={() => navigation.navigate("Contacts")}
        >
          <Text style={styles.doneButText}>Done</Text>
        </Pressable>
      </View>
      {/* Contact Photo */}
      {/* This view is causing the issue with the cancel button */}
      <View style={styles.addPhotoContainer}>
        <Image source={require("./images/1.png")} style={styles.contactImage} />
        <View style={styles.newDoneBut}>
          {/* Add Photo Button */}
          <Pressable
            style={styles.addPhotoButton}
            onPress={() => choosePhoto()}
          >
            <Text style={styles.addPhotoButtonText}>Add Photo</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const choosePhoto = () => {
  
};

// Confirms for the cancellation of adding a contact
const cancelConfirm = ({ navigation }) => {
  return Alert.alert(
    "Are you sure?",
    "If you have changes, they will be lost!",
    [
      {
        text: "No, continue editing",
        style: "cancel",
        onPress: () => console.log("No, continue editing"),
      },
      {
        text: "Yes, discard",
        style: "destructive",
        onPress: () =>
          navigation.navigate("Contacts") & console.log("Yes, discard"),
      },
    ]
  );
};

// This is the navigation end of the app (Main Frame)
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Contacts"
          component={MainScreen}
          options={{ title: "Contacts" }}
        />
        <Stack.Screen name="NewContact" component={NewContact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  titleContainer: {
    paddingTop: 60,
    alignItems: "center",
  },
  plusButton: {
    left: 320,
    bottom: 45,
    width: 50,
    height: 50,
    backgroundColor: "#C4C4C4",
    borderRadius: 10,
    alignItems: "center",
  },
  plusButtonText: {
    fontSize: 48,
    bottom: 7,
  },
  searchContainer: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  textTitle: {
    fontSize: 36,
    fontWeight: "bold",
  },
  contactsContainer: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  newTitleContainer: {
    top: 60,
    alignItems: "center",
  },
  newTextTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  cancelButton: {
    left: 10,
    width: 100,
    top: 36,
  },
  cancelButText: {
    textAlign: "center",
    fontSize: 18,
    color: "#0066FF",
  },
  doneButton: {
    left: 290,
    width: 100,
    top: 15,
  },
  doneButText: {
    textAlign: "center",
    fontSize: 18,
    color: "#0066FF",
  },
  contactImage: {
    alignSelf: "center",
    marginTop: 38,
    width: 158,
    height: 158,
  },
  addPhotoContainer: {
    top: 30,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  addPhotoButton: {
    width: 100,
    top: 12,
  },
  addPhotoButtonText: {
    textAlign: "center",
    fontSize: 18,
    color: "#0066FF",
  },
});
export default App;
