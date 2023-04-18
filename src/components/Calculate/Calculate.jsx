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

    const handleOperationClick = (event) => {
        setOperation(event.target.value);
    }

    const handleCalculate = () => {
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
        setNum1('');
        setNum2('');
        setOperation('');
    }

    const handleClear = () => {
        setNum1('');
        setNum2('');
        setOperation('');
        setResult('');
        setError('');
    }

    return (
        <div className="calculator">
            <div className="display-container">
                <p className="operation">{num1} {operation} {num2}</p>
                <p className="result">{result}</p>
            </div>
            {error && <p className="error">{error}</p>}
            <div className="input-container">
                <label htmlFor="num1">First Number:</label>
                <input id="num1" type="text" value={num1} onChange={handleNum1Change} />
            </div>
            <div className="input-container">
                <label htmlFor="num2">Second Number:</label>
                <input id="num2" type="text" value={num2} onChange={handleNum2Change} />
            </div>
            <div className="button-container">
                <button className="operation-button" onClick={handleOperationClick} value="+">+</button>
                <button className="operation-button" onClick={handleOperationClick} value="-">-</button>
                <button className="operation-button" onClick={handleOperationClick} value="*">*</button>
                <button className="operation-button" onClick={handleOperationClick} value="/">/</button>
            </div>
            <div className="button-container">
                <button className="clear-button" onClick={handleClear}>Clear</button>
                <button className="calculate-button" onClick={handleCalculate}>=</button>
            </div>
        </div>
    );
}

export default Calculate;




