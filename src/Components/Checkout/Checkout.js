
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Checkout.css'

const Checkout = (props) => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext)
    const [product ,setProduct] = useState([])
    const history = useHistory();
    const orderPlace = () =>{
        const order ={...loggedInUser, ...match}
          const url = `https://ancient-headland-43589.herokuapp.com/addorder`;
          
          fetch(url, {
            method: 'POST', 
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(order)
           
          })
          
          .then(res => console.log('server side response', res))
          .then(data => console.log(data))
          console.log(match?.name,loggedInUser?.email)
          const urls = `/order`
          history.push(urls)
        };
       
    
  useEffect(()=>{
      fetch('https://ancient-headland-43589.herokuapp.com/product')
      .then(res => res.json())
      .then(data => setProduct(data))
  } ,[])
  const{id} = useParams()
  console.log('before find',id)
  const match = product.find(pd => pd._id == id)
    console.log('after find ', match)

    return (
        <div>

            <div className='d-flex'>


<div className='lg col-md-5'>
<h3>Online Bazar</h3>
</div>
    <div className='col-md-7'>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            {/* <a class="navbar-brand" href="#">Navbar</a> */}
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                        <Link to="/">Home</Link>
                        <Link to="/order">Order</Link>
                        <Link to="/addproduct">Admin</Link>
                        <Link to="/login">login</Link>
                </div>
            </div>
        </nav>
    </div>
</div>
     
          
           <div className='container'>
           <h1>CheckOut</h1> 

           <table className="table">
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                      
                    </tr>
                    <tr>
                        <td>{match?.name}</td>
                        <td>1</td>
                        <td>${match?.price}</td>
                     
                    </tr>
                </table>
                <div className='float-sm-right'>
                <button onClick={orderPlace} type="button" class="btn btn-primary">Order</button> 
                </div>
               
               {/* <h5>Description:{match?.name}</h5> 
               <h5>Quantity:1</h5>
               <h5>Price:{match?.price}</h5>
               <button onClick={orderPlace} type="button" class="btn btn-primary">Order</button> */}
           </div>
        </div>
    );
};

export default Checkout;