import Session from "./Session";

function SessionList(props) {
  return props.data.map((session) => (
    <Session
      text={session.label}
      onPress={props.onPress}
      remove={props.remove}
      handler={props.handler}
    />
  ));
}

export default SessionList;
