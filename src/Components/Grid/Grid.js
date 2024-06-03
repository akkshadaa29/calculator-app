import Display from '../DisplayPanel/Display';
import './Grid.css';
import { useState } from 'react';

function Grid() {
    let [data, setData] = useState("");
    let operations=["+","-","*","-","/","%"];
    const parentToChild = (a) => {
        setData(data + a);
        console.log("data "+data);
        
      }
      const clear = () => {
        setData("");
      }
      const calculate=(equation)=>{
        for (let i = 0; i < equation.length; i++) {
          console.log(equation[i]);
          let nums=equation.toString().split(equation[i]);
          if(operations.includes(equation[i]))
            {
              console.log("Found operation.")
              switch(equation[i])
              {
                case "+":
                  setData(Number(nums[0]) + Number(nums[1]));
                  break;
                case "-":
                  setData(Number(nums[0]) - Number(nums[1]));
                  break;
                case "*":
                  setData(Number(nums[0]) * Number(nums[1]));
                  break;
                case "/":
                  setData(Number(nums[0]) / Number(nums[1]));
                  break;
                case "%":
                  setData(Number(nums[0]) % Number(nums[1]));
                   break;
                default:
                  console.log("Default");         
              }
            }
      }
    } 
    return (
        <div>
        <Display parentToChild={data}/>    
        <div class='grid-container'>
         <button class='grid-item' onClick={() => parentToChild("%")}>%</button>
         <button class='grid-item' onClick={() => parentToChild("^2")}>x^2</button>
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