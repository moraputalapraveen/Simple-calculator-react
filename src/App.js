import React, { useState } from 'react';
import './App.css'; 

function Calculator() {

const pos={
  textAlign: 'center',
}

let [val,up_val]=useState("")
  function append(x)
  {
        up_val(val+x)
  }

  function cal()
  {
      let x=eval(val)
      up_val(x)
  }

  function clear()
  {
    up_val("")
  }


  return(
    <>
    <p>change background color</p>
    <input type='color' id='col' onChange={()=>
      document.body.style.backgroundColor=document.getElementById('col').value
    }/>
      <h1 style={pos}>Simple Calculator using React</h1>
    <div className='container'>
    
        <div className='output'>
            <input type='text' className='text' value={val} />
        </div>

        <div className='button1'>
          <button className ='val' onClick={()=>append('1')}>1</button>
          <button className='val' onClick={()=>append('2')}>2</button>
          <button className='val'onClick={()=>append('3')} >3</button>
          <button className='val13' onClick={clear}>C</button>
        </div>
        <div className='button1'>
          <button className='val' onClick={()=>append('4')}>4</button>
          <button className='val' onClick={()=>append('5')}>5</button>
          <button className='val' onClick={()=>append('6')}>6</button>
          <button className='val1' onClick={()=>append('/')}>/</button>
        </div>
        <div className='button1'>
          <button className='val' onClick={()=>append('7')}>7</button>
          <button className='val' onClick={()=>append('8')}>8</button>
          <button className='val' onClick={()=>append('9')}>9</button>
          <button className='val1' onClick={()=>append('*')}>*</button>
        </div>
        <div className='button1'>
          <button className='val' onClick={()=>append('0')}>0</button>
          <button className='val12' onClick={()=>append('-')}>-</button>
          <button className='val12' onClick={()=>append('+')}>+</button>
          <button className='val1' onClick={cal} >=</button>
        </div>
        
    
    </div>
    
    </>




  )

}
 
export default Calculator;
