type Props = {
  onGenerate: () => void;
};

const LottoNumbers = ({ onGenerate }: Props) => {
  return (
    <div>
      <button onClick={onGenerate}>Random Numbers</button>
    </div>
  );
};

export default LottoNumbers;
