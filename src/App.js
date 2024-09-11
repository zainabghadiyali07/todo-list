import React, {useState} from 'react'
import './App.css';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';

function App() {
  const [listTodo,setListTodo]=useState([]);
  let addList = (inputText)=>{
    if(inputText!=='')
    setListTodo([...listTodo,inputText]);
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
    
       <div >
        <TodoItem addList={addList}/>
        {listTodo.map((listItem,i)=>{
          return (
            <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}
        
       </div>
      
  );
}

export default App;
