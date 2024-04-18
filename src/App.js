import React, { useState } from 'react';
import './App.css';
import Products from './components/products';

function App() {
  const [searchTerm, setSearchTerm] = useState('');


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <header className="text-gray-400 ">
        <div className='w-full flex bg-zinc-800 py-3 justify-center items-center'>
          <img src="/nikeLogo.png" alt="" className='w-16'/>
        </div>
        <div className="w-full mx-auto py-5 md:px-12 px-4 border-b border-gray-300">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" className="focus:outline-none" placeholder="Buscar produto" onChange={handleSearchChange} />
            </div>
          </div>
        </div>
        <div className='md:p-12 p-4'>
          <Products searchTerm={searchTerm} />
        </div>
      </header>
    </div>
  );
}

export default App;
