import * as actn from './actionType.js'


export const reqSend = () =>{
    return{
        type:actn.GET_REQ
    }
}

export const error = () =>{
    return{
        type:actn.GET_ERROR
    }
}
export const getdata = (data) =>{

    return{
        type:actn.GET_DATA,
        todo : data
    }
}
export const fetchData = () => (dispatch)=>{
    dispatch(reqSend())
     fetch('http://localhost:8080/todo')
     .then((res)=> res.json())
     .then((res)=> dispatch(getdata(res.todo)))
     .catch((err)=> dispatch(error()));
  }

  export const addData = (obj) => (dispatch) =>{
     
    let url = `http://localhost:8080/todo`;
    fetch(url,{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{'content-type': 'application/json',}
     }).then(()=>{
       dispatch(fetchData());
     })

  }

  export const deleteData = (id) => (dispatch) =>{

    let url = `http://localhost:8080/todo/${id}`;
    fetch(url,{
        method: "DELETE"
    }).then(()=> dispatch(fetchData()));

  }
export const updateData = (res) => (dispatch) =>{

        let obj = {
               playload : !res.playload
         }

    let url = `http://localhost:8080/todo/${res.id}`;
    fetch(url,{
        method:"PUT",
        body:JSON.stringify(obj),
        headers:{'content-type': 'application/json',}
     }).then(()=>{
       dispatch(fetchData());
     })
}

