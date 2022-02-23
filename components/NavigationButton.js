import { Pressable, StyleSheet, Text } from "react-native";

export default function NavigationButton(props) {
  return (
    <Pressable style={styles.navButton} onPress={props.onPress}>
      <Text>{props.label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  navButton: {
    padding: 10,
    backgroundColor: "red",
  },
});
