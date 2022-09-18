 import React from 'react';
import { Todolist } from './Todolist';
import { addData } from '../redux/action';
import { useDispatch } from 'react-redux';
import {v4 as uuid} from 'uuid';
 
 export const Todo = () =>{
    const dispatch = useDispatch();
   const[title,setTitle] = React.useState("");

  const handleChange = (e) =>{
     setTitle(e.target.value);
  }
  const handleClick = () =>{
   const obj = {
  id : uuid(),
  task : title,
  playload : false
     }
    dispatch((addData(obj)));
    setTitle("");
  }

    return(
      <>
        <div>
        <input type="text" placeholder="Add Task....." onChange={handleChange}  value = {title}/>
        <button onClick={handleClick}>Add</button>
        </div>
        <Todolist/>
        </>
    )
}