import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [list, setList] = useState([]);

  const get = () => {
    axios.get('http://43.200.104.40/get',{
      params: {
        korName: "박민선",
        initial: "PMS",
        birthDay: "20001125",
        nameMeaning: ['옥돌', '베풀'],
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
