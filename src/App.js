import dishwasher from './dishwasher.webp'
import './App.css';
import { useState } from 'react';
import { PinInput } from 'react-input-pin-code';
import background from "./pirates-chest.jpeg";
 
const numbers = ["1234567", "1234576"];

function App() {
  const [showResult, setShowResult] = useState(false);
  const [values, setValues] = useState(numbers[0].split('').map(x => ''));

  function check(v) {
    const found = numbers.find(n => n === v.join(''));
    if (found) {
      setShowResult(true);
    } else {
      setShowResult(false);
    }
  }

  return (
    <div className="App" style={{backgroundImage: `url(${background})`}}>
      
        {!showResult &&
          <div className='UpperContainer'>
            <PinInput containerClassName="InputContainer"
              inputClassName="InputS"
              values={values}
              onChange={(value, index, values) => {
                setValues(values);
                check(values);
              }}
              autoFocus='true'
              borderColor='rgb(0,204,204)'
              focusBorderColor='rgb(244, 0, 0)'
              placeholder=''
              required='false'
              showState={false}
              size="lg"
            />
          </div>
        }
        {showResult &&
          <div className='SolutionDiv'><img src={dishwasher} alt="dishwasher" /></div>
        }
    </div>
  );
}

export default App;
