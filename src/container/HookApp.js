import React, {useState} from 'react';
import TableData from '../common/TableData';
import HookForm from '../common/HookForm';
import { UserDetailsContext } from '../store';
const HookApp = () => {
  
    const [state, setState] = useState([{
        id:'',
        firstName:'',
         userName:'',
        emailId:'',
        gender:'',
        mobileNo:'',
       
        fieldEdit: false
        
    }])
    const [ userDetails, setUserDetails] = useState([])
    const onChangeHandler = (name, value) => {       
        let sat = state
             setState({...sat, [name] : value })
    }
    const editItem = (item) => {
       setState({fieldEdit:true, ...item})
    }

    const deleteItem = (id) => {      
       const deleteuserDetails = userDetails.filter((item) =>(item.id !== id))
       setUserDetails(deleteuserDetails)
    }
    const resetHandler = () => {       
        valueEmpty()   
    }

    const valueEmpty = () => {
        setState({
            id:'',
            firstName:'',
            lastName:'',
            userName:'',
            emailId:'',
            gender:'',
            mobileNo:'',
            fieldEdit:false,
            editId:''
    }) 
    }

    const submitHandler = () => {                 
        let newList = {
            id: 1 + Math.random(),
            firstName:state.firstName,
            lastName:state.lastName,
            userName:state.userName,
            emailId:state.emailId,
            gender:state.gender,
            mobileNo:state.mobileNo,
        }        
     setUserDetails([...userDetails, newList]) 
        valueEmpty()
    }

    const editHandler = () => {       
       const oldusers = [...userDetails]
       const id = state.id
       console.log('oldusers', oldusers, id)
        oldusers.map((item) => (item.id === state.id)?[        
            item.firstName=state.firstName,
            item.lastName=state.lastName,
            item.userName=state.userName,
            item.emailId=state.emailId,
            item.gender=state.gender,
            item.mobileNo=state.mobileNo
       ]:oldusers)
       setUserDetails([ ...userDetails]); 
       valueEmpty()
    } 
   
       
        return (
           
            <>
             <UserDetailsContext.Provider value = { {
                state: state,
                userDetails : userDetails,
                editItemFun : editItem,
                deleteItemFun :deleteItem,
               onChangeHandlerFun : onChangeHandler,
               resetHandlerFun: resetHandler,
               submitHandlerFun:submitHandler,
               editHandlerFun:editHandler
                }}>
            <div style={{margin:'5%'}} >
                {/* <FormData 
                state = {state}
                onChangeHandler = {onChangeHandler}
                resetHandler = {resetHandler}
                submitHandler = {submitHandler}
                editHandler = {editHandler}
                 /> */}
                {/* <TableData  tab = {userDetails} editItem = {editItem} deleteItem = {deleteItem} /> */}
                <HookForm   />
            <TableData  />
                </div>
                </UserDetailsContext.Provider>
            </>
        )
   
}


export default HookApp;