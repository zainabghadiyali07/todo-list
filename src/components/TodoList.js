import React from 'react'

function TodoList(props) {
  return (
    <li className='item'>
       {props.item}
        <span className='icon'>
        <input type="checkbox" />
        <i className="fa-solid fa-trash-can icon-delete"
        onClick={e=>{
            props.deleteItem(props.index)
        }}>
       </i>
       </span>
    </li>
    
  )
}

export default TodoList