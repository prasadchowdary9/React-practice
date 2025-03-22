import React from 'react';
import CounterOne from './components/CounterOne';
import './App.css';
import CounterTwo from './components/CounterTwo';
import DataFetching from './components/DataFetching';
import DataFetchingusingReducer from './components/DataFetchingusingReducer';

const App = () => {
  return (
    <div className='App'>
      <h1>React Reducer Counter</h1>
      <DataFetching />
      <DataFetchingusingReducer />
    </div>
  );
};

export default App;
