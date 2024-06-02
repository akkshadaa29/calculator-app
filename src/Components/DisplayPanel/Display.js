import './Display.css';

function Display({parentToChild}) {    
    return (
        <div className='display'>
            <h3>Enter</h3>
            <h3>{parentToChild}</h3>
        </div>
    );
  }
  
  export default Display;