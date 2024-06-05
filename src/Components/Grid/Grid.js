import Display from '../DisplayPanel/Display';
import './Grid.css';
import { useState } from 'react';

function Grid() {
    let [data, setData] = useState("");
    const operations=["+","-","*","/","%"];
    const parentToChild = (a) => {
           console.log("Length "+data.length);
           if(data.length===0)
            {
              var res=validateFirst(a);
              console.log("Validate First "+res);
              if(res===false)
                {
                  setData("Invalid syntax.")
                }
                else
                {
                  setData(a);
                }
            }
            else
            {
              var res2=validateLast(data,a);
              if(res2===false)
                {
                  setData("Invalid syntax.")
                }
              else
              {  
              setData(data + a);
              console.log("data "+data);
              }
            }
  
      }
      const clear = () => {
        setData("");
      }
      const calculate=(equation)=>{
        setData(eval(equation))                
    }
      const validateFirst=(charac)=>
      // eslint-disable-next-line no-lone-blocks
      {
        if(operations.includes(charac)===true)
          {
            console.log("Error ");
            return false; 
          }
        return true; 
      }
      const validateLast=(equation,charc)=>
      {
        if(operations.includes(equation.charAt(equation.length-1)) && operations.includes(charc))
          {
            return false;
          }

      }
      

    
    return (
        <div>
        <Display parentToChild={data}/>    
        <div class='grid-container'>
         <button class='grid-item' onClick={() => parentToChild("%")}>%</button>
         <button class='grid-item' onClick={() => parentToChild("**")}>x^n</button>
         <button class='grid-item' onClick={() => parentToChild("sqrt")}>sqrt x</button>  
         <button class='grid-item' onClick={() => parentToChild("/")}>/</button>
         <button class='grid-item' onClick={() => parentToChild("7")}>7</button>
         <button class='grid-item' onClick={() => parentToChild("8")}>8</button>  
         <button class='grid-item' onClick={() => parentToChild("9")}>9</button>
         <button class='grid-item' onClick={() => parentToChild("*")}>*</button>
         <button class='grid-item' onClick={() => parentToChild("4")}>4</button>
         <button class='grid-item' onClick={() => parentToChild("5")}>5</button>
         <button class='grid-item' onClick={() => parentToChild("6")}>6</button>
         <button class='grid-item' onClick={() => parentToChild("-")}>-</button>
         <button class='grid-item' onClick={() => parentToChild("1")}>1</button>
         <button class='grid-item' onClick={() => parentToChild("2")}>2</button>
         <button class='grid-item' onClick={() => parentToChild("3")}>3</button>
         <button class='grid-item' onClick={() => parentToChild("+")}>+</button>
         <button class='grid-item'onClick={() => clear()}>clear</button>
         <button class='grid-item' onClick={() => parentToChild("0")}>0</button>
         <button class='grid-item' onClick={() => parentToChild(".")}>.</button>
         <button class='grid-item' onClick={() => calculate(data)}>=</button> 
        </div>
        </div>
    );
  }
  
  export default Grid;