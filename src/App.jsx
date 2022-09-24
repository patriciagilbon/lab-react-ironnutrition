import React from 'react';
import './App.css';
import DynamicFoodList from './components/DynamicFoodList';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Food I ate this week</h1>
        <DynamicFoodList />
        {' '}
        {/* <= instantiate our component */}
      </div>
    </div>
  );
}

export default App;
