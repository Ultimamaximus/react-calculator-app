import React, { useState } from 'react';
import * as math from 'mathjs';
import './App.css';
import Display from '../Display/Display';
import Button from '../Button/Button.js';
import Buttons from '../Buttons/Buttons';

const App = () => {
  const [operations, setOperations] = useState([]);

  const handleClick = (e) => {
    const value = e.target.getAttribute('data-value');
    switch (value) {
      case 'clear':
        setOperations([]);
        break;
      case 'equal':
        calculateOperations();
        break;
      default:
        const newOperations = [...operations, value];
        setOperations(newOperations);
        break;
    }
  };

  const calculateOperations = () => {
    let result = operations.join('');
    if (result) {
      result = eval(result);
      result = math.format(result, { precision: 14 });
      result = parseFloat(result);
      setOperations([result]);
    }
  };

  return (
    <div className="App">
      <Display data={operations} />
      <Buttons>
        <Button onClick={handleClick} label="C" value="clear" />
        <Button onClick={handleClick} label="7" value="7" />
        <Button onClick={handleClick} label="4" value="4" />
        <Button onClick={handleClick} label="1" value="1" />
        <Button onClick={handleClick} label="0" value="0" />

        <Button onClick={handleClick} label="/" value="/" />
        <Button onClick={handleClick} label="8" value="8" />
        <Button onClick={handleClick} label="5" value="5" />
        <Button onClick={handleClick} label="2" value="2" />
        <Button onClick={handleClick} label="." value="." />

        <Button onClick={handleClick} label="x" value="*" />
        <Button onClick={handleClick} label="9" value="9" />
        <Button onClick={handleClick} label="6" value="6" />
        <Button onClick={handleClick} label="3" value="3" />
        <Button label="" value="null" />

        <Button onClick={handleClick} label="-" value="-" />
        <Button onClick={handleClick} label="+" size="2" value="+" />
        <Button onClick={handleClick} label="=" size="2" value="equal" />
      </Buttons>
    </div>
  );
};

export default App;
