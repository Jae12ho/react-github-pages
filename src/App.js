import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [list, setList] = useState([]);
  // const [value, setValue] = useState({});

  // useEffect(() => {
  //   console.log("{ korName: '양재호', initial: 'YJH', birthDay: '20020412', nameMeaning: ['재상', '호걸'] }")
  // }, [])

  // const onChange = (e) => {
  //   setValue(e.target.value);
  //   console.log(e.target.value)
  // }

  const get = () => {
    axios.get('http://43.200.104.40/get', {
      params: { 
        korName: '양재호', 
        initial: 'YJH', 
        birthDay: '20020412', 
        nameMeaning: ['재상', '호걸'] 
      }
    })
      .then(res => {
        console.log(res.data);
        setList(res.data);
      })
  }
  return (
    <div className="App">
      <button onClick={get}>버튼</button>
      {list.map((e, index)=> (
        <p key={index}>{e[0]} / {e[1]}</p>
      ))}
    </div>
  );
}

export default App;
