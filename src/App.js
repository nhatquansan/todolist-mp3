import {useState} from 'react'



function App() {

  const [work, setWork] = useState('')
  const [todos, setTodos] = useState([])
  const handleAdd = () => {
      setTodos(prev => [...prev, work])
      setWork('')
  }


  return (
    <div className="flex flex-col gap-8 h-screen justify-center border border-red-500 items-center">
    <div className="flex gap-8">
    <input type="text" 
     className="outline-none w-[400px] border border-blue-600 px-4 py-2"
      value={work}
      onChange={e=> setWork(e.target.value )} 
    />
      <button
      type="button"
      className="outline-none px-4 py-2 rounded-md text-white  bg-blue-500"
      onClick={handleAdd}
    >
      Add
    </button>
    </div>
    <div>
      <h3 className='font-bold text-xl'>Content: </h3>
      <ul>
          {todos?.map((item,index) => {
            return (
              <li key={index}>
                {item}
              </li>
            )
          })}
      </ul>
    </div>
    
    </div>
  );
}

export default App;
