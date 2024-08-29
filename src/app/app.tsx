import React from 'react';
import Header from '../components/Header'
import Counter from '../components/Counter'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Header title="Simple React Project" />
      <Counter />
    </div>
  );
};

export default App;