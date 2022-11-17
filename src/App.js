import React from 'react';
import './App.css';

function App() {
  const backGroundImage = "/images/backgroundrain.jpg"
  const current = new Date();

const time = current.toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
});
  return (

    <div className="justify-center items-center container mx-auto">
      <div className='second-header-content rounded '>
        <div className='my-20'>
          <h1 className='text-[#fff0ff] text-center header-content font-bold '>
            HT.Pi
          </h1>
          <h3 className='text-center text-2xl font-bold'>{time}</h3>
          
        </div>
        <div className='inner-contents flex flex-row justify-center shadow-2xl '>
          <div class="max-w-sm bg-[#a0b9cb] rounded overflow-hidden shadow-lg bg-slate-100 mx-auto  align-middle">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mx-5 my-10">Temperature</div>
              
              
            </div>
            
          </div>

          <div class="max-w-sm bg-[#a0b9cb] rounded overflow-hidden shadow-lg bg-slate-100 mx-auto align-middle">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mx-7 my-10 ">Humidity</div>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
