import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const Search = (props) => {
  return (
    <View style={styles.item}>
    <Text>🔍  </Text>
      <TextInput placeholder={"Search..."} style={styles.search} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#C4C4C4",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    maxWidth: "50%",
  },
  search: {
    flex: 1, //this makes the text input fill the entire "View"
  },
});

export default Search;
