import React,{useState} from 'react'

function TodoItem(props) {
    
    const [inputText,setInputText]=useState('');
    const handleEnterPress = (e)=>{
      if(e.keyCode===13){
        props.addList(inputText)
        setInputText("")
      }
    }
  return (
    <div>
    <h1 className='header'>TodoItem</h1>
    <input className='input-box-todo' type="text" placeholder='Enter your todo' 
    value={inputText}
     onChange={e=>{
      setInputText(e.target.value)
    }}
     onKeyDown={handleEnterPress}
    />
    <button className='add-btn' 
    onClick={()=>{props.addList(inputText) 
      setInputText("")}}>+</button>
    
    
    </div>
  )
}

export default TodoItem