import LightToggle from './components/LightToggle';
import LottoNumbers from './components/LottoNumbers';
import ClickCounter from './components/ClickCounter';
import { useState } from 'react';

const App = () => {
  /* Your states here */
  const [count, setCount] = useState<number>(0);
  const [isLightOn, setIsLightOn] = useState<boolean>(false);
  const [lottoNumbers, setLottoNumbers] = useState<number[]>([]);

  const handleCount = () => {
    setCount((current) => current + 1);
  };

  const handleLightOn = () => {
    setIsLightOn((current) => !current);
  };

  const handleLottoNumbers = () => {
    const nums = new Set<number>();
    while (nums.size < 7) {
      const num = Math.floor(Math.random() * 50) + 1;
      nums.add(num);
    }
    setLottoNumbers(Array.from(nums));
  };

  return (
    <div>
      <h2>Light Toggle</h2>
      <LightToggle lightToggle={handleLightOn} lights={isLightOn} />
      <div
        style={{
          backgroundColor: isLightOn ? 'black' : 'white',
          color: isLightOn ? 'white' : 'black',
        }}
      >
        Change this background color using the style attribute
      </div>

      <h2>Lotto Numbers</h2>
      <LottoNumbers onGenerate={handleLottoNumbers} />
      <div className="output">{lottoNumbers.join(', ')}</div>

      <h2>Click Counter</h2>
      <ClickCounter onCount={handleCount} />
      <div className="output">
        <strong>{count}</strong>
      </div>
    </div>
  );
};

export default App;
