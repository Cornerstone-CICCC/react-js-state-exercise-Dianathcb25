type Props = {
  lightToggle: () => void;
  lights: boolean;
};

const LightToggle = (props: Props) => {
  return (
    <div>
      <button onClick={props.lightToggle}>
        {props.lights ? 'Lights On' : 'Lights Off'}
      </button>
    </div>
  );
};

export default LightToggle;
