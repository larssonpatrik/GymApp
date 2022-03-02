import Session from "./Session";

function SessionList(props) {
  return props.data.map((session) => (
    <Session
      text={session.label}
      onPress={props.onPress}
      session={session.name}
      data={session}
    />
  ));
}

export default SessionList;
