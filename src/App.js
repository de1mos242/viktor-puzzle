import dishwasher from './dishwasher.jpeg'
import './App.css';
import { useState } from 'react';
import ReactCodeInput from 'react-code-input'
 
const numbers = "1234567";


const width = '40px'
const height = '50px'
const fontSize = '30px'
const props = {
  inputStyle: {
    fontFamily: 'monospace',
    margin:  '4px',
    MozAppearance: 'textfield',
    width,
    borderRadius: '3px',
    fontSize,
    height,
    paddingLeft: '7px',
    backgroundColor: 'black',
    color: 'lightskyblue',
    border: '1px solid lightskyblue'
  },
  inputStyleInvalid: {
    fontFamily: 'monospace',
    margin:  '4px',
    MozAppearance: 'textfield',
    width,
    borderRadius: '3px',
    fontSize,
    height,
    paddingLeft: '7px',
    backgroundColor: 'black',
    color: 'red',
    border: '1px solid red'
  }
}



function App() {
  const [curNum, setNum] = useState("");
  const [showResult, setShowResult] = useState(false);

  function check(v) {
    if (v === numbers) {
      setShowResult(true);
    } else {
      setShowResult(false);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {!showResult &&
        <ReactCodeInput type='number' fields={numbers.length} {...props} value={curNum} onChange={v => {
          setNum(v);
          check(v);
        }} />
        }
        {showResult &&
          <img src={dishwasher} alt="dishwasher" />
        }
        
      </header>
    </div>
  );
}

export default App;
