import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderData from '../OrderData/OrderData';
import { Link } from 'react-router-dom';
const Order = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext)
    const [order ,setOrder] = useState([])

    useEffect(() => {
        // fetch('http://localhost:4000/order?email=' + loggedInUser.email)
        fetch('    https://ancient-headland-43589.herokuapp.com/order?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

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
                 
                                {
                                    loggedInUser.email ? <img src={loggedInUser.pic} style={{ height: '60px' }} class="rounded-circle" alt="100x100" /> : <Link to="/login"><button type="button" class="btn btn-success">login</button></Link>
                                }
                            </div>
            </div>
        </nav>
    </div>
</div>
            <h3>You have {order.length} orders</h3>
           {
             order.map(order =><OrderData order={order}></OrderData>)
            }
        </div>
    );
};

export default Order;