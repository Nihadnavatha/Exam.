import { useState } from 'react';
import Create from './Create';

function Home() {
    const [todos,] = useState([]);


    
  return (
    <div>
        <h2>Todo List</h2>
        <Create />
        {
            todos.lenghth === 0 
            ?
            <div><h2>No Record</h2></div>
            :
            todos.map(todo => (
            <div> 
                {todo}
            </div>
            ))
        }
    </div>
  );
}

export default Home;
