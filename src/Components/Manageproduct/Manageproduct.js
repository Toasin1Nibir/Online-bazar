
import './Manageproduct.css'
import React from 'react';
import { Link } from 'react-router-dom';
import  { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faThLarge,
    faPlus,
    faPencilAlt,
    faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
const Manageproduct= (props) => {
   
  
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
    const [products , setProduct] = useState([])
    useEffect(()=>{
        fetch('https://ancient-headland-43589.herokuapp.com/product')
        .then(res => res.json())
      
        .then(data => setProduct(data))
    },[products])
    return (

 
   <div className='row s'>

        <div className="col-lg-2 p-0">
            <div className="content text-center">
                <h1>Admin</h1>
                <Link className="manage-product" to="/manageproduct">
                    <FontAwesomeIcon
                        className="admin-icon"
                        icon={faThLarge}
                    />{" "}
                    Manage Product
                </Link>
                <Link className="admin-btn" to="/addproduct">
                    <FontAwesomeIcon
                        className="admin-icon"
                        icon={faPlus}
                    />{" "}
                    Add Product
                </Link>
                <h6 className="admin-btn">
                    <FontAwesomeIcon
                        className="admin-icon"
                        icon={faPencilAlt}
                    />{" "}
                    Edit Product
                </h6>
            </div>
        </div>
        <div className="col-lg-10 p-0">
            <div className="add-product">
                <div className="top">
                    <h2>Manage Product</h2>
                </div>
                <div className="product-list">
                    <table className="manage-product-table">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Weight</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {products &&
                                        products.map((product) =>
                            
                                    <tr key ={product._id}>
                                        <td >
                                            <p>{product.name}</p>
                                        </td>
                                        <td>
                                            <p>{product.weight}</p>
                                        </td>
                                        <td>
                                            <p>{product.price}</p>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary edit-btn">
                                                <FontAwesomeIcon
                                                    className="admin-icon"
                                                    icon={faPencilAlt}
                                                />
                                            </button>
                                            <button className="btn btn-warning edit-btn">
                                                <FontAwesomeIcon
                                                    onClick = {() =>  deletebtn(product._id)}
                                                    className="admin-icon"
                                                    icon={faTrashAlt}
                                                />
                                            </button>
                                        </td>
                                    </tr>
                                  )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>





           
     




























    );
};

export default Manageproduct;