import React from 'react';
import {useDispatch,useSelector} from 'react-redux'
import{fetchData,deleteData,updateData} from '../redux/action'

export const Todolist = () =>{
    const dispatch = useDispatch();
    const data  = useSelector((res)=> res);
    React.useEffect(()=>{
   
      dispatch(fetchData());
  
    },[])
  

    const handleDelete = (id) =>{
           dispatch(deleteData(id));
    }
  
     const handleUpdate = (res) =>{
          dispatch(updateData(res));
     }

    return(
        <div>
         {
            data.padding ? <h1>Loading.....</h1> : data.error ? <h1>Error 404</h1> :(
                data.Todo.map((res)=>{
                    return (
                    <div key={res.id}>
                    <h2 style={{color : res.playload ? "green" : "red"}}>{res.task}</h2>
                    <button onClick={()=>{
                        handleDelete(res.id);
                    }}>Delete</button>
                    <button onClick={()=>{handleUpdate(res)}}>{res.playload ? "not done" : "done"}</button>
                    </div>
                    )
                })
            )

         }
         </div>
    )
}