import { StyleSheet, Text, View, Pressable } from "react-native";

function Session(props) {
  return (
    <View style={styles.container}>
      <Pressable onPress={props.onPress} style={styles.textWrap}>
        <Text style={styles.text}>{props.text}</Text>
        <Text style={styles.textSecond}>
          {props.data.exercises.length} exercises
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  textWrap: {
    display: "flex",
    justifyContent: "center",
    width: 350,
    backgroundColor: "#2C2C2C",
    padding: 15,
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
    color: "white",
  },
  textSecond: {
    fontSize: 16,
    color: "gray",
  },
});

export default Session;
