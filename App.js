import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import NavigationButton from "./components/NavigationButton";
import sessions from "./assets/data";
import SessionList from "./components/SessionList";
import SessionPage from "./SessionPage";

export default function App() {
  const [SessionView, setSessionView] = useState("session");

  if (SessionView === "home") {
    return (
      <View style={styles.app}>
        <Text style={styles.logo}>GymApp</Text>
        <Text style={styles.mainText}>Load Session</Text>
        <SessionList
          data={sessions}
          onPress={() => setSessionView("session")}
          remove={() => alert("removed")}
        />
      </View>
    );
  }

  if (SessionView === "session") {
    return (
      <View style={styles.app}>
        <SessionPage data={sessions[0]} />
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
