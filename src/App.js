import React, { useState, useCallback } from 'react';

import Input from './components/common/Input';
import Button from './components/common/Button';
import Emoji from './components/common/Emoji';

import './App.scss';

const App = () => {

  const [candleAmount, setCandleAmount] = useState('');
  const [calcinePerCandle, setCalcinePerCandle] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleChangeCandleAmount = useCallback((value) => {
    setCandleAmount(value);
    setShowResult(false);
  }, [setCandleAmount, setShowResult]);

  const handleChangeCalcinePerCandle = useCallback((value) => {
    setCalcinePerCandle(value);
    setShowResult(false);
  }, [setCalcinePerCandle, setShowResult]);

  const calcPotentialCandleAmount = (candles, additionalCalcines) => {
    const formattedCalcinePerCandle = parseInt(calcinePerCandle, 10);
    if (isNaN(formattedCalcinePerCandle) || formattedCalcinePerCandle === 0)
      return candles;
    if (formattedCalcinePerCandle === 1)
      return 'Блажен кто верует';

    const formattedCandles = parseInt(candles, 10);
    if (isNaN(formattedCandles))
      return 0;
    let totalCandles = formattedCandles;
  
    let totalCalcines = totalCandles + additionalCalcines;

    while (totalCalcines / formattedCalcinePerCandle >= 1) {
      const unusedCalcines = totalCalcines % formattedCalcinePerCandle;
      const madeCandles = Math.floor(totalCalcines / formattedCalcinePerCandle);
      totalCandles += calcPotentialCandleAmount(madeCandles, unusedCalcines);
      totalCalcines -= madeCandles * formattedCalcinePerCandle;
    }
    return totalCandles; 
  }

  const handleShowResult = useCallback(() => {
    setShowResult(true);
  }, [setShowResult]);

  return (
    <div className="main">
      <div className="main__container">
        <Emoji
          symbol="🕯️"
          label="candle"
        />
        <Input
          onChange={handleChangeCandleAmount}
          value={candleAmount}
          placeholder="на складе"
        />
      </div>
      <div className="main__container">
        <Emoji 
          symbol="🔥"
          label="fire"
        />
        <Input
          onChange={handleChangeCalcinePerCandle}
          value={calcinePerCandle}
          placeholder="огарков на свечу"
        />
      </div>
      <div className="main__container">
        <Button 
          inline
          onClick={handleShowResult}
        >
          <Emoji
            symbol="🙏🏻"
            label="pray"
          /> c Богом!
        </Button>
      </div>
      <div className="main__container main__container__result">
        {showResult && (
          <React.Fragment>
            <div>{calcPotentialCandleAmount(candleAmount, 0)}</div>
            <Emoji 
              symbol="🤑"
              label="money"
            />
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default App;
