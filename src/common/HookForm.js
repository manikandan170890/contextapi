import React,{useContext, useState} from "react"
import { UserDetailsContext } from "../store";

const HookForm = (props) =>{
  const {state, onChangeHandlerFun, submitHandlerFun, editHandlerFun}=useContext(UserDetailsContext)
  console.log(useContext(UserDetailsContext),state.firstName)
  const [errMsg, setErrMsg] = useState([{}]);
  const onChangeHandler = (e) => {
    const { name, value } = e.target; //Destructuring
    onChangeHandlerFun(name, value);
  };
  const editHandler = (e) => {
    e.preventDefault();
    if (validation()) {
      editHandlerFun();
      setErrMsg([{}])
    }
  };

    const validation=()=>{
      let error=true
      let msg={}
      if(state.firstName==='' || state.firstName===undefined){
        msg.firstName='Enter your FirstName'
        error=false
      }
      if(state.lastName==='' || state.lastName===undefined){
        msg.lastName='Enter your LastName'
        error=false
      }
      if(state.userName==='' || state.userName===undefined){
        msg.userName='Enter your UserName'
        error=false
      }
      
      if(state.emailId==='' || state.emailId===undefined){
        msg.emailId='Enter your EmailId'
        error=false
      }
      if(state.gender==='' || state.gender===undefined){
        msg.gender='Enter your Gender'
        error=false
      }
      if(state.mobileNo==='' || state.mobileNo===undefined){
        msg.mobileNo='Enter your MobileNo'
        error=false
      }
      setErrMsg([msg])
      return error
    }
    const submitHandler =(e) =>{
        e.preventDefault()
        if(validation()){
          submitHandlerFun()
        setErrMsg([{}])
        }
    }
    console.log(errMsg)
return(
    <>
   
<form>
          <div className={"mb-3 row"}>
            <label className={"col-sm-2 col-form-label"}>FirstName</label>
            <div className={"col-sm-5"}>
              <input
                type="text"
                className={"form-control-plaintext"}
                name="firstName"
                placeholder="FirstName"
                value={state.firstName || ''}
                onChange
                ={onChangeHandler}
              />
              {errMsg[0].firstName && <span className={'text-danger'}>{errMsg[0].firstName}</span>}
              
            </div>
          </div>

          <div className={"mb-3 row"}>
            <label className={"col-sm-2 col-form-label"}>LastName</label>
            <div className={"col-sm-5"}>
              <input
                type="text"
                className={"form-control-plaintext"}
                name="lastName"
                placeholder="LastName"
                value={state.lastName || ''}
                onChange={onChangeHandler}
              />
              {errMsg[0].lastName && <span className={'text-danger'}>{errMsg[0].lastName}</span>}
            </div>
          </div>

          <div className={"mb-3 row"}>
            <label className={"col-sm-2 col-form-label"}>UserName</label>
            <div className={"col-sm-5"}>
              <input
                type="text"
                className={"form-control-plaintext"}
                name="userName"
                placeholder="UserName"
                value={state.userName || ''}
                onChange={onChangeHandler}
              />
              {errMsg[0].userName && <span className={'text-danger'}>{errMsg[0].userName}</span>}
            </div>
          </div>

          <div className={"mb-3 row"}>
            <label className={"col-sm-2 col-form-label"}>EmailId</label>
            <div className={"col-sm-5"}>
              <input
                type="text"
                className={"form-control-plaintext"}
                name="emailId"
                placeholder="EmailId"
                value={state.emailId || ''}
                onChange={onChangeHandler}
              />
              {errMsg[0].emailId && <span className={'text-danger'}>{errMsg[0].emailId}</span>}
            </div>
          </div>

          <div className={"mb-3 row"}>
            <label className={"col-sm-2 col-form-label"}>Gender</label>
            <div className={"col-sm-5"}>
              <select 
                className={"form-select"}
                name="gender"
                
                value={state.gender || ''}
                onChange={onChangeHandler}
              >
                <option value=''>Select</option>
                <option value='Male'>Male</option>
                <option value='FeMale'>FeMale</option>
                </select>
                {errMsg[0].gender && <span className={'text-danger'}>{errMsg[0].gender}</span>}
            </div>
          </div>

          <div className={"mb-3 row"}>
            <label className={"col-sm-2 col-form-label"}>MobileNo</label>
            <div className={"col-sm-5"}>
              <input
                type="text"
                className={"form-control-plaintext"}
                name="mobileNo"
                placeholder="Mobile No"
                value={state.mobileNo || ''}
                onChange={onChangeHandler}
              />
              {errMsg[0].mobileNo && <span className={'text-danger'}>{errMsg[0].mobileNo}</span>}
            </div>
          </div>
          <div className={"offset-md-3"}>
            {state.fieldEdit?
            <button type="submit" className={"btn btn-primary mb-3"} onClick={(e)=>editHandler(e)}>
              Edit User
            </button>:<button type="submit" className={"btn btn-primary mb-3"} onClick={(e)=>submitHandler(e)}>
              Add User
            </button>}
          </div>
        </form>
    </>
)
}

export default HookForm;