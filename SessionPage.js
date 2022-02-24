import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function SessionPage(props) {
  const [exercise, setExercise] = useState(0);
  const [set, setSet] = useState(0);

  if (set === props.data.exercises[exercise].weight.length) {
    setExercise(exercise + 1);
    setSet(0);
  }

  return (
    <View style={styles.exerciseCard}>
      <View style={styles.upper}>
        <Text>{props.data.exercises[exercise].name}</Text>
        <Text>{props.data.exercises[exercise].reps} reps</Text>
      </View>
      <View style={styles.upper}>
        <Text>{props.data.exercises[exercise].weight[set]}kg</Text>
        <Pressable onPress={() => setSet(set + 1)}>
          <Text>Next</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  exerciseCard: {
    display: "flex",
    justifyContent: "center",
    marginTop: 200,
    width: 300,
    height: 50,
    backgroundColor: "#77D668",
  },
  upper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
