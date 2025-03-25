import React, { useReducer } from 'react';

const initialState = 0;

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

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':   
            return state - 1;
        case 'reset':   
            return initialState;
        default:        
            return state;
    }   
};

const CounterOne = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

    React.useEffect(() => {
        console.log('Current Count:', count);
    }, [count]);

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button style={buttonStyle} onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button style={buttonStyle} onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>  
            <button style={buttonStyle} onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
};

export default CounterOne;
