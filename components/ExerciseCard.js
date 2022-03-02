import { StyleSheet, View, Text, Pressable } from "react-native";

export default function ExerciseCard(props) {
  const iteratorArray = Array(props.currentSet).fill(1);
  const iteratorArray2 = Array(
    props.data.exercises[props.currentExercise].weight.length - props.currentSet
  ).fill(1);

  return (
    <View style={styles.wrapper}>
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
        <View style={styles.status}>
          {iteratorArray.map((i) => (
            <View style={styles.statusBarActive}></View>
          ))}
          {iteratorArray2.map((i) => (
            <View style={styles.statusBar}></View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 200,
  },
  exerciseCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 350,
    backgroundColor: "#2C2C2C",
    borderRadius: 8,
  },
  upper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
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
    width: "100%",
    alignItems: "center",
    marginTop: 8,
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
  status: {
    width: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    marginBottom: 18,
  },
  statusBar: {
    width: 8,
    height: 8,
    backgroundColor: "gray",
    borderRadius: 2,
  },
  statusBarActive: {
    width: 8,
    height: 8,
    backgroundColor: "#7CFF7F",
    borderRadius: 2,
  },
});
