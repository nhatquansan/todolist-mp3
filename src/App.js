import {useState} from 'react'



function App() {

  const [work, setWork] = useState('')


  return (
    <div className="flex  gap-8 h-screen justify-center border border-red-500 items-center">
     <input type="text" 
     className="outline-none w-[400px] border border-blue-600 px-4 py-2"
      value={work}
      onChange={e=> setWork(e.target.value )} 
    />
      <button
      type="button"
      className="outline-none px-4 py-2 rounded-md text-white  bg-blue-500"
    >
      Add
    </button>
    
    </div>
  );
}

export default App;
