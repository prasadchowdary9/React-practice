// import React ,{ useReducer} from 'react'
// const buttonStyle = {   
//     margin: '5px',   
//     padding: '10px',   
//     fontSize: '16px',   
//     cursor: 'pointer',   
//     backgroundColor: '#f97316',  // Matching your primary color   
//     color: 'white',   
//     border: 'none',   
//     borderRadius: '5px' 
// };

// const initialState ={
//     firstCounter: 0
// }
// const reducer = (state, action)=>{
//     switch(action.type){
//         case 'increment':
//             return {firstCounter: state.firstCounter + 1};
//         case 'decrement':
//             return {firstCounter: state.firstCounter - 1};
//         case 'reset':
//             return initialState;
//         case 'increment5':
//             return {firstCounter: state.firstCounter + 5};
//         case 'decrement5':
//             return  {firstCounter: state.firstCounter - 5};
//         default:
//             return state;
//     }
// }


// const CounterTwo = () => {
//     const [count,dispatch] = useReducer(reducer, initialState);  


//   return (
//     <div>
//             {/* <h2>Counter: {count}</h2> */}
//             <h2>Counter: {count.firstCounter}</h2>
//         <button style={buttonStyle} onClick={() => dispatch({ type: 'increment' })}>Increment</button>
//             <button style={buttonStyle} onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>  
//             <button style={buttonStyle} onClick={() => dispatch({ type: 'reset' })}>Reset</button>
//             <button style={buttonStyle} onClick={() => dispatch({ type: 'increment5' })}>Increment5</button>
//             <button style={buttonStyle} onClick={() => dispatch({ type: 'decrement5' })}>Decrement5</button>  
           
//     </div>
//   )
// }

// export default CounterTwo
import React, { useReducer } from 'react';

const buttonStyle = {   
    margin: '5px',   
    padding: '10px',   
    fontSize: '16px',   
    cursor: 'pointer',   
    backgroundColor: '#f97316',  // Matching your primary color   
    color: 'white',   
    border: 'none',   
    borderRadius: '5px' 
};

// Initial state as an object
const initialState = { firstCounter: 0 };

// Reducer function with dynamic payload support
const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return { firstCounter: state.firstCounter + action.payload };
        case 'decrement':
            return { firstCounter: state.firstCounter - action.payload };
        case 'reset':
            return initialState;
        default:
            return state;
    }
};

const CounterTwo = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>Counter: {count.firstCounter}</h2>
            
            {/* Pass custom values */}
            <button style={buttonStyle} onClick={() => dispatch({ type: 'increment', payload: 1 })}>Increment +1</button>
            <button style={buttonStyle} onClick={() => dispatch({ type: 'decrement', payload: 1 })}>Decrement -1</button>  
            <button style={buttonStyle} onClick={() => dispatch({ type: 'increment', payload: 5 })}>Increment +5</button>
            <button style={buttonStyle} onClick={() => dispatch({ type: 'decrement', payload: 5 })}>Decrement -5</button>  
            <button style={buttonStyle} onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            
            {/* Input field to set custom value */}
            <input
                type="number"
                placeholder="Enter value"
                id="customValue"
                style={{ margin: '10px', padding: '5px', fontSize: '16px' }}
            />
            
            {/* Dispatching with user input value */}
            <button 
                style={buttonStyle} 
                onClick={() => {
                    const value = Number(document.getElementById('customValue').value);
                    dispatch({ type: 'increment', payload: value });
                }}
            >
                Increment Custom
            </button>

            <button 
                style={buttonStyle} 
                onClick={() => {
                    const value = Number(document.getElementById('customValue').value);
                    dispatch({ type: 'decrement', payload: value });
                }}
            >
                Decrement Custom
            </button>
        </div>
    );
};

export default CounterTwo;
