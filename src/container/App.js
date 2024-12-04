import React from 'react';
import TableData from '../common/TableData';
//import FormData from '../common/FormData';
import HookForm from '../common/HookForm';
import Card from '../common/Card'
import { UserDetailsContext } from '../store';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            id:'',
            firstName:'',
            lastName:'',
            userName:'',
            emailId:'',
            gender:'',
            mobileNo:'',
            userDetails:[{ id:'',
            firstName:'test',
            lastName:'test',
            userName:'test',
            emailId:'test',
            gender:'male',
            mobileNo:'test',}],
            fieldEdit: false
            
        }
    }

     onChangeHandler = (name, value) => {
       // const { name, value } = e.target       
             this.setState({ [name] : value })
    }
    editItem = (item) => {
        this.setState({fieldEdit:true, ...item})
    }

    deleteItem = (id) => {
       const userDetails = this.state.userDetails.filter((item) =>(item.id !== id))
       this.setState({userDetails})
    }
    resetHandler = () => {
       // e.preventDefault();
        this.valueEmpty()   
    }

    valueEmpty = () => {
        this.setState({
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

    submitHandler = () => {
       // e.preventDefault();
        let userDetails = this.state.userDetails
        let newList = {
            id: 1 + Math.random(),
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            userName:this.state.userName,
            emailId:this.state.emailId,
            gender:this.state.gender,
            mobileNo:this.state.mobileNo,
        } 
     userDetails.push(newList)
   // const userDetails = [...this.state.userDetails, newList]    
     this.setState({userDetails})
   // this.setState({updateList},() => console.log(this.state.userDetails))
   this.valueEmpty()
    }

    editHandler = () => {
       // e.preventDefault();
       const oldusers = [...this.state.userDetails]
       const id = this.state.id
      // console.log('oldusers', oldusers, id)
        oldusers.map((item) => (item.id === this.state.id)?[        
            item.firstName=this.state.firstName,
            item.lastName=this.state.lastName,
            item.userName=this.state.userName,
            item.emailId=this.state.emailId,
            item.gender=this.state.gender,
            item.mobileNo=this.state.mobileNo
       ]:oldusers)
       this.setState({userDetails: [ ...this.state.userDetails]}); 
       this.valueEmpty()
    }

    tableView = () => {
       return this.state.userDetails && this.state.userDetails.map((item) => {           
            return <tr key = {item.id}>
                <td>{Math.round(item.id)}</td>
                <td>{item.userName}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.gender}</td>
                <td>{item.emailId}</td>
                <td>{item.mobileNo}</td>
                <td>
                <button type = 'button' className={'btn btn-success'} onClick= {()=>this.editItem(item)}>Edit</button> &nbsp; 
                <button type='button' className={'btn btn-danger'} onClick= {()=>this.deleteItem(item.id)}>Delete</button>
                </td>
                </tr>
        })
    }
   

    
    render() {        
       
        return (
            <>
            <UserDetailsContext.Provider value = { {
                state: this.state,
                userDetails : this.state.userDetails,
                editItemFun : this.editItem,
                deleteItemFun :this.deleteItem,
               onChangeHandlerFun : this.onChangeHandler,
               resetHandlerFun: this.resetHandler,
               submitHandlerFun:this.submitHandler,
               editHandlerFun:this.editHandler
                }}>
            <div style={{margin:'5%'}} >
            <HookForm   />
            <TableData  />
            <Card/>
                </div>
                </UserDetailsContext.Provider>
            </>
        )
    }
}


export default App;