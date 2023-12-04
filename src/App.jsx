import React from 'react';
import Counter from './Counter'; 
import Clock from './Clock'; 

function App() {
  return (
    <div>
      <Counter initialVal={0} incrementAmount={1} />
      <Clock />
    </div>
  );
}

export default App;
