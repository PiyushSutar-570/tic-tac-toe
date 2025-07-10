import React, { useState } from 'react'
import circle_icon from "../Assets/circle.png"
import cross_icon from "../Assets/cross.png"
import getWinner from '../../winner'
const TicTacToe = () => {
  const [data,setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [count,setCount] = useState(0);
  const [lock,setLock] = useState(false);
  const [win , setWin] = useState("");
  const [full,setFull] = useState(false);
  const toggle = (e,num)=>{
    if(lock){
        return null;
    }
    if(data[num]){
        return null;
    }
    const newData = [...data];
    if(count%2===0){
        newData[num]="x";
        setData(newData);
    }
    else{
        newData[num]="o";
        setData(newData);
    }
    const result = getWinner(newData);
    if(result!==""){
        setLock(true);
        setWin(result);
    }
    setCount(count+1);
    if(count+1===9){
        setFull(true);
    }
  }
  const handleReset = () =>{
    setData(["", "", "", "", "", "", "", "", ""]);
    setCount(0);
    setLock(false);
    setWin("");
    setFull(false);
  }
  return (
    <div className='flex flex-col justify-between items-center w-full h-screen bg-[#0D1117]'>
      <h1 className='text-4xl sm:text-5xl font-bold text-white mt-8 mb-14'>Tic Tac Toe Game In <span className='text-green-300'>React</span></h1>
      {lock && <div className='text-3xl sm:text-4xl font-bold text-white mb-5'>The Winner is <span className='text-green-500'>{win.toUpperCase()}</span></div>}
      {!lock && full && <div className='text-3xl sm:text-4xl font-bold mb-5 text-green-500'>Draw !</div>}
      {!lock && !full && <div className='text-3xl sm:text-4xl font-bold text-white mb-5 sm:mb-8'>Now <span className='text-green-500'>"{count%2===0 ? "X" : "O"}"</span> Turn !</div>}
      <div className='board grid grid-cols-1 gap-1 sm:gap-2'>
        <div className='row1 grid grid-cols-3 gap-1 sm:gap-2'>
            <div className="boxes flex justify-center items-center rounded-lg bg-[#1f3540] w-24 h-24 sm:w-[120px] sm:h-[120px]" onClick={(e)=>toggle(e,0)}>
                {data[0] === "x" && <img src={cross_icon} alt="" className='scale-75 sm:scale-100' />}
                {data[0] === "o" && <img src={circle_icon} alt="" className='scale-75 sm:scale-100' />}
            </div>
            <div className="boxes flex justify-center items-center rounded-lg bg-[#1f3540] w-24 h-24 sm:w-[120px] sm:h-[120px]" onClick={(e)=>toggle(e,1)}>
                {data[1] === "x" && <img src={cross_icon} alt="" className='scale-75 sm:scale-100' />}
                {data[1] === "o" && <img src={circle_icon} alt="" className='scale-75 sm:scale-100'/>}
            </div>
            <div className="boxes flex justify-center items-center rounded-lg bg-[#1f3540] w-24 h-24 sm:w-[120px] sm:h-[120px]" onClick={(e)=>toggle(e,2)}>
                {data[2] === "x" && <img src={cross_icon} alt="" className='scale-75 sm:scale-100'/>}
                {data[2] === "o" && <img src={circle_icon} alt="" className='scale-75 sm:scale-100'/>}
            </div>
        </div>
        <div className='row2 grid grid-cols-3 gap-1 sm:gap-2'>
            <div className="boxes flex justify-center items-center rounded-lg bg-[#1f3540] w-24 h-24 sm:w-[120px] sm:h-[120px]" onClick={(e)=>toggle(e,3)}>
                {data[3] === "x" && <img src={cross_icon} alt="" className='scale-75 sm:scale-100'/>}
                {data[3] === "o" && <img src={circle_icon} alt="" className='scale-75 sm:scale-100'/>}
            </div>
            <div className="boxes flex justify-center items-center rounded-lg bg-[#1f3540] w-24 h-24 sm:w-[120px] sm:h-[120px]" onClick={(e)=>toggle(e,4)}>
                {data[4] === "x" && <img src={cross_icon} alt="" className='scale-75 sm:scale-100'/>}
                {data[4] === "o" && <img src={circle_icon} alt="" className='scale-75 sm:scale-100'/>}
            </div>
            <div className="boxes flex justify-center items-center rounded-lg bg-[#1f3540] w-24 h-24 sm:w-[120px] sm:h-[120px]" onClick={(e)=>toggle(e,5)}>
                {data[5] === "x" && <img src={cross_icon} alt="" className='scale-75 sm:scale-100'/>}
                {data[5] === "o" && <img src={circle_icon} alt="" className='scale-75 sm:scale-100'/>}
            </div>
        </div>
        <div className='row3 grid grid-cols-3 gap-1 sm:gap-2'>
            <div className="boxes flex justify-center items-center rounded-lg bg-[#1f3540] w-24 h-24 sm:w-[120px] sm:h-[120px]" onClick={(e)=>toggle(e,6)}>
                {data[6] === "x" && <img src={cross_icon} alt="" className='scale-75 sm:scale-100'/>}
                {data[6] === "o" && <img src={circle_icon} alt="" className='scale-75 sm:scale-100'/>}
            </div>
            <div className="boxes flex justify-center items-center rounded-lg bg-[#1f3540] w-24 h-24 sm:w-[120px] sm:h-[120px]" onClick={(e)=>toggle(e,7)}>
                {data[7] === "x" && <img src={cross_icon} alt="" className='scale-75 sm:scale-100'/>}
                {data[7] === "o" && <img src={circle_icon} alt="" className='scale-75 sm:scale-100'/>}
            </div>
            <div className="boxes flex justify-center items-center rounded-lg bg-[#1f3540] w-24 h-24 sm:w-[120px] sm:h-[120px]" onClick={(e)=>toggle(e,8)}>
                {data[8] === "x" && <img src={cross_icon} alt="" className='scale-75 sm:scale-100'/>}
                {data[8] === "o" && <img src={circle_icon} alt="" className='scale-75 sm:scale-100'/>}
            </div>
        </div>
      </div>
      <button className='mt-14 bg-[#1f3540] text-green-400 text-2xl px-14 py-5 rounded-full cursor-pointer border-2 border-white mb-5' onClick={handleReset}>Reset</button>

      <div className='text-white text-2xl font-semibold'>Made By @Piyush-Sutar</div>
    </div>
  )
}

export default TicTacToe
