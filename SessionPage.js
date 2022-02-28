import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import ExerciseCard from "./components/ExerciseCard";

export default function SessionPage(props) {
  const [exercise, setExercise] = useState(0);
  const [set, setSet] = useState(0);

  if (set === props.data.exercises[exercise].weight.length) {
    setExercise(exercise + 1);
    setSet(0);
  }

  return (
    <ExerciseCard
      data={props.data}
      setState={() => setSet(set + 1)}
      currentSet={set}
      currentExercise={exercise}
    />
  );
}
