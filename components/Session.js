import { StyleSheet, Text, View, Button, Pressable } from "react-native";

function Session(props) {
  return (
    <View style={styles.container}>
      <Pressable onPress={props.onPress} style={styles.textWrap}>
        <Text style={styles.text}>{props.text}</Text>
      </Pressable>
      <Pressable onPress={props.remove} style={styles.remove}>
        <Text style={styles.X}>X</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  textWrap: {
    display: "flex",
    justifyContent: "center",
    width: 250,
    height: 50,
    backgroundColor: "#77D668",
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
  text: {
    fontSize: 18,
    marginLeft: 15,
  },
  remove: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    backgroundColor: "#A9A9A9",
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
  X: {
    fontSize: 22,
  },
});

export default Session;
