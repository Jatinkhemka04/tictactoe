import React , {useState} from 'react';
import './App.css';
import Block from './components/Block';
function App() {
  const[state , setState]=useState(Array(9).fill(null));
  const[currTurn , setCurrTurn]=useState("x");

  const checkWinner=(state: any[])=>{
    const win =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    ];
    for(let i=0;i<win.length;i++){
      const[a,b,c]=win[i];
      if(state[a]!==null && state[a]===state[b]&& state[a]===state[c])
      return true;
    }
    return false;
  }
  const handleBlock=(index)=>{
  const stateCopy=Array.from(state);
  if(stateCopy[index]!=null)return;
  stateCopy[index]=currTurn;
  setState(stateCopy);
  setCurrTurn(currTurn==="x"?"0":"x");
  
  const win= checkWinner(stateCopy);
  if(win)
  alert(`${currTurn} won the game`);


  
  
  };
  return (
    <div className="board">
    <div className="row">
      <Block onClick={()=> handleBlock(0)}value={state[0]}/>
      <Block onClick={()=> handleBlock(1)}value={state[1]}/>
      <Block onClick={()=> handleBlock(2)}value={state[2]}/>
    </div>
    <div className="row">
    <Block onClick={()=> handleBlock(3)}value={state[3]}/>
    <Block onClick={()=> handleBlock(4)}value={state[4]}/>
    <Block onClick={()=> handleBlock(5)}value={state[5]}/>
    </div>
    <div className="row">
    <Block onClick={()=> handleBlock(6)}value={state[6]}/>
    <Block onClick={()=> handleBlock(7)}value={state[7]}/>
    <Block onClick={()=> handleBlock(8)}value={state[8]}/>
    </div>
    </div>
  );
}
export default App;
