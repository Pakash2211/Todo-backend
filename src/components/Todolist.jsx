import React from 'react';
import {useDispatch,useSelector} from 'react-redux'
import{fetchData,deleteData,updateData} from '../redux/action'
import {MdDelete,MdOutlineDoneOutline} from 'react-icons/md'
import{ImCancelCircle} from 'react-icons/im'

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
        <div class="todolist">
         {
            data.padding ? <h1>Loading.....</h1> : data.error ? <h1>Error 404</h1> :(
                data.Todo.map((res)=>{
                    return (
                    <div key={res.id} className="todoinv">
                    <h2 style={{color : res.playload ? "green" : "red"}}>{res.task}</h2>
                   
                    {res.playload ? <ImCancelCircle onClick={()=>{handleUpdate(res)}} className='cancel'/> : <MdOutlineDoneOutline onClick={()=>{handleUpdate(res)}} className='right'/> }
                   <MdDelete onClick={()=>{
                        handleDelete(res.id);
                    }} className='del'/>
                    </div>
                    )
                })
            )

         }
         </div>
    )
}