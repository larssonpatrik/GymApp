import { StyleSheet, View, Text, Pressable } from "react-native";

export default function ExerciseCard(props) {
  return (
    <View>
      <View style={styles.exerciseCard}>
        <View style={styles.upper}>
          <Text style={styles.upperText}>
            {props.data.exercises[props.currentExercise].name}
          </Text>
          <Text style={styles.upperText}>
            {props.data.exercises[props.currentExercise].reps} reps
          </Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles.weight}>
            {
              props.data.exercises[props.currentExercise].weight[
                props.currentSet
              ]
            }
            kg
          </Text>
          <Pressable onPress={props.setState}>
            <Text style={styles.nextSet}>Next set</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  exerciseCard: {
    display: "flex",
    justifyContent: "center",
    marginTop: 200,
    width: 350,
    backgroundColor: "#2C2C2C",
    borderRadius: 8,
  },
  upper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 18,
    paddingLeft: 18,
    paddingRight: 18,
  },
  upperText: {
    fontSize: 32,
    color: "white",
  },
  lower: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
    paddingBottom: 18,
    paddingLeft: 18,
    paddingRight: 18,
  },
  weight: {
    fontSize: 55,
    color: "white",
  },
  nextSet: {
    fontSize: 32,
    color: "gray",
  },
});
