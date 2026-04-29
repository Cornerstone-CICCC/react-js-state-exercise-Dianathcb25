type Props = {
  onCount: () => void;
};

const ClickCounter = ({ onCount }: Props) => {
  return (
    <div>
      <button onClick={onCount}>Start counting</button>
    </div>
  );
};

export default ClickCounter;
