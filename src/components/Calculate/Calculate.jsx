import React, { useState } from 'react';
import './Calculate.css';

function Calculate() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  }

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  }

  const handleOperationChange = (event) => {
    setOperation(event.target.value);
  }

  const calculateResult = () => {
    if (!num1 || !num2) {
      setError('Please enter two numbers');
      setResult('');
      return;
    }
    if (!['+', '-', '*', '/'].includes(operation)) {
      setError('Please select a valid operation');
      setResult('');
      return;
    }
    let result = 0;
    switch (operation) {
      case '+':
        result = parseInt(num1) + parseInt(num2);
        break;
      case '-':
        result = parseInt(num1) - parseInt(num2);
        break;
      case '*':
        result = parseInt(num1) * parseInt(num2);
        break;
      case '/':
        result = parseInt(num1) / parseInt(num2);
        break;
      default:
        break;
    }
    setResult(result);
    setError('');
  }

  return (
    <div className="calculator">
      <h2>Calculator</h2>
      {error && <p className="error">{error}</p>}
      <div className="input-container">
        <label>Number 1:</label>
        <input type="text" value={num1} onChange={handleNum1Change} />
      </div>
      <div className="input-container">
        <label>Number 2:</label>
        <input type="text" value={num2} onChange={handleNum2Change} />
      </div>
      <div className="input-container">
        <label>Operation:</label>
        <select value={operation} onChange={handleOperationChange}>
          <option value="">Select an operation</option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </div>
      <button className="calculate-button" onClick={calculateResult}>Calculate</button>
      {result && <p className="result">Result: {result}</p>}
    </div>
  );
}

export default Calculate;


