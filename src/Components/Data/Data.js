import './Data.css'
import React from 'react';
import { Link } from 'react-router-dom';
const Data = (props) => {
    const{_id,name,weight ,price} =  props.pd 
  
    const deletebtn =(_id) =>{
        const url = `https://ancient-headland-43589.herokuapp.com/delete/${_id}`;
        fetch(url,{ 
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(result =>{
            console.log('deleted')
        })
    }
    return (

    <div>
        {/* <div className='nav text-center'>
        <nav>
          <Link to="/manageproduct">Manage Product</Link>
          <Link to= "/addproduct">Add Product</Link>
          <Link to="/addproduct">Edit Product</Link>
        </nav>
      </div> */}


            <div className='row'>
                <div className="col-md-3 nav">
                    <div className='text-center'>
                        <nav>
                            <Link to="/manageproduct">Manage Product</Link>
                            <Link to="/addproduct">Add Product</Link>
                          
                        </nav>
                    </div>
                </div>
            <div className="col-md-9">
                <table className="table">
                    <tr>
                        <th>Product Name</th>
                        <th>Weight</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>{name}</td>
                        <td>{weight}</td>
                        <td>${price}</td>
                       <td><button onClick={() => deletebtn(_id)} type="button" class="btn btn-danger">delete<i class="far fa-trash-alt"></i></button></td> 
                        {/* <td><button  onClick={() => deletebtn(_id)} >delete</button></td> */}
                    </tr>
                </table>

            </div>
        </div>
    </div>






        // <div className=''>
           
        //         <div className='d-flex'>
        //             {/* <div className='md-col-4'>
        //                 <h3>Online Bazar</h3>
        //             </div> */}
        //             <div className='nav text-center'>
        //                 <nav>
        //                     <Link to="/manageproduct">Manage Product</Link>
        //                     <Link to="/addproduct">Add Product</Link>
        //                     <Link to="/addproduct">Edit Product</Link>
        //                 </nav>
        //             </div>
        //             </div>
                   
        //                     {/* <table className="tabless">
        //                         <tr>
        //                             <th>Product Name</th>
        //                             <th>Weight</th>
        //                             <th>Price</th>
        //                             <th>Action</th>
        //                         </tr>
        //                         <tr>
        //                             <td>{name}</td>
        //                             <td>{weight}</td>
        //                             <td>${price}</td>
        //                             <td><button onClick={() => deletebtn(_id)} >delete</button></td>
        //                         </tr>
        //                     </table>
        //          */}
              

        //           </div>

           
     




























    );
};

export default Data;