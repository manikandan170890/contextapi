import React, {useContext} from 'react';
import { UserDetailsContext } from '../store';

const Card = () => {
    const {userDetails,  deleteItemFun } = useContext(UserDetailsContext)
    const deleteItem = (id) => {
        deleteItemFun(id)
     }

    return <>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
   { userDetails && userDetails.map((item, index) => { 
                return <div className="col" key ={index}>
                  <div className="card shadow-sm">
                  <img src={`https://picsum.photos/200/300?random=${index}`}  width="100%" height="225" />
                    <div className="card-body">
                      <p className="card-text">{item.userName}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                       
                 <button type='button' className='btn btn-danger' onClick= {()=>deleteItem(item.id)}>Delete</button>
                        </div>                        
                      </div>
                    </div>
                  </div>
                </div>
               
        })
    }
   </div>
    </>
}

export default Card