import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './Home.css'
const Home = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext)
    const [product , setProduct] = useState([])
    useEffect(()=>{
        fetch('https://ancient-headland-43589.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProduct(data))
    } ,[])
    return (

        <div className='header'>
            <div className='d-flex'>
                <div className='col-md-6 head'>
                    <h1>Online Bazar</h1>
                </div>
                <div className='col-md-6'>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <Link to="/">Home</Link>
                                <Link to="/order">Orders</Link>
                                <Link to="/addproduct">Admin</Link>
                               


                                {
                                    loggedInUser.email ? <img src={loggedInUser.pic} style={{height:'60px'}} class="rounded-circle" alt="100x100"/>:  <Link to="/login"><button type="button" class="btn btn-success">login</button></Link>
                                }

                             
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                {
                    product.length === 0 &&
                    <div class="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                }
                <div className="row">
                    {
                        product.map(products => <Header products={products} key={products._id}></Header>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;