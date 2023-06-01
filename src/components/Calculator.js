import React, { useState } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';
import Result from './Result';

const Calculator = () => {
  const [obj, setObj] = useState({});

  const clickHandler = (e) => {
    setObj((preState) => calculate(preState, e.target.innerText));
  };

  return (
    <div className="calculator">
      <Result obj={obj} />
      <div className="buttons">
        <Button onClick={clickHandler}>AC</Button>
        <Button onClick={clickHandler}>+/-</Button>
        <Button onClick={clickHandler}>%</Button>
        <Button onClick={clickHandler} className="operation">
          ÷
        </Button>

        <Button onClick={clickHandler}>7</Button>
        <Button onClick={clickHandler}>8</Button>
        <Button onClick={clickHandler}>9</Button>
        <Button onClick={clickHandler} className="operation">
          x
        </Button>
        <Button onClick={clickHandler}>4</Button>
        <Button onClick={clickHandler}>5</Button>
        <Button onClick={clickHandler}>6</Button>
        <Button onClick={clickHandler} className="operation">
          -
        </Button>

        <Button onClick={clickHandler}>1</Button>
        <Button onClick={clickHandler}>2</Button>
        <Button onClick={clickHandler}>3</Button>
        <Button onClick={clickHandler} className="operation">
          +
        </Button>
        <Button onClick={clickHandler} className="zero">
          0
        </Button>
        <Button onClick={clickHandler}>.</Button>
        <Button onClick={clickHandler} className="operation">
          =
        </Button>
      </div>
    </div>
  );
};

export default Calculator;
