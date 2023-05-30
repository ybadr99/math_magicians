import React from 'react';
import Button from './Button';

const Calculator = () => (
  <div className="calculator">
    <input type="text" id="result" readOnly value={0} />
    <div className="buttons">
      <Button>A/C</Button>
      <Button>+/-</Button>
      <Button>%</Button>
      <Button className="operation">÷</Button>

      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button className="operation">X</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button className="operation">-</Button>

      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button className="operation">+</Button>
      <Button className="zero">0</Button>
      <Button>.</Button>
      <Button className="operation">=</Button>
    </div>
  </div>
);

export default Calculator;
