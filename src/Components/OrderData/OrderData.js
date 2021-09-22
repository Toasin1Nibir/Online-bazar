import React from 'react';

const OrderData = (props) => {
    const{_id,name ,email,weight,price} = props.order

 
    return (
        <div className='container'>
            
                 <table className="manage-product-table">
                        <thead>
                            <tr>
                                <th> Name</th>
                                <th>Weight</th>
                                <th>Price</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                            
                                    <tr key ={_id}>
                                        <td >
                                            <p>{name}</p>
                                        </td>
                                        <td>
                                            <p>{weight}</p>
                                        </td>
                                        <td>
                                            <p>{price}</p>
                                        </td>
                                        <td>
                                            <p>{email}</p>
                                        </td>
                                       
                                    </tr>
                                  
                        </tbody>
                </table>
               
              
        </div>
    );
};

export default OrderData;