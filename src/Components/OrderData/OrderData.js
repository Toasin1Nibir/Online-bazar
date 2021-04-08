import React from 'react';

const OrderData = (props) => {
    const{name ,email,weight,price} = props.order

 
    return (
        <div>
               <table className="table w-20">
                    <tr>
                        <th>Name</th>
                        <th>Weight</th>
                        <th>Price</th>
                        <th>Email</th>
                    </tr>
                    <tr>
                        <td>{name}</td>
                        <td>{weight}</td>
                        <td>${price}</td>
                        <td>{email}</td>
                    </tr>
                    
                </table>
               
              
        </div>
    );
};

export default OrderData;