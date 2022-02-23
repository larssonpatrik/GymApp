import { Pressable, StyleSheet, Text, View } from "react-native";
import Session from "./components/Session";
import { useState } from "react";
import NavigationButton from "./components/NavigationButton";
export default function App() {
  const [SessionView, setSessionView] = useState("home");

  if (SessionView === "home") {
    return (
      <View style={styles.app}>
        <Text style={styles.logo}>GymApp</Text>
        <Text style={styles.mainText}>Load Session</Text>
        <Session
          onPress={() => setSessionView("session")}
          text="Pecs Shoulders Triceps"
        />
      </View>
    );
  }

  if (SessionView === "session") {
    return (
      <View style={styles.app}>
        <Text style={styles.logo}>GymApp</Text>
        <NavigationButton label="back" onPress={() => setSessionView("home")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#151515",
    width: "100%",
    height: "100%",
  },
  logo: {
    fontSize: 50,
    color: "white",
    marginTop: 50,
  },
  mainText: {
    marginTop: 200,
    fontSize: 36,
    color: "white",
  },
});
