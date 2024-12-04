import React, {useContext} from 'react';
import { UserDetailsContext } from '../store';

const TableData = (props) => {
    const {userDetails, editItemFun, deleteItemFun } = useContext(UserDetailsContext)
   
    const editItem = (item) => {       
        editItemFun(item)
     }
 
     const deleteItem = (id) => {
        deleteItemFun(id)
     }

    const tableView = () => {
        return userDetails && userDetails.map((item) => {           
             return <tr key = {item.id}>
                 <td>{Math.round(item.id)}</td>
                 <td>{item.userName}</td>
                 <td>{item.firstName}</td>
                 <td>{item.lastName}</td>
                 <td>{item.gender}</td>
                 <td>{item.emailId}</td>
                 <td>{item.mobileNo}</td>
                 <td>
                 <button type = 'button' className='btn btn-success' onClick= {()=>editItem(item)}>Edit</button> &nbsp; 
                 <button type='button' className='btn btn-danger' onClick= {()=>deleteItem(item.id)}>Delete</button>
                 </td>
                 </tr>
         })
     }   
    return (
        <>        
         <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>UserID</th>
                            <th>UserName</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Gender</th>
                            <th>Email ID</th>
                            <th>Mobile No</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableView()}
                    </tbody>
                </table>
        </>
    )
}


export default TableData