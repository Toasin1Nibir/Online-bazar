
import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './Header.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Header = (props) => {
    const { imageURL, price, _id, name, weight } = props.products
    // {products}
    const history = useHistory();
    const handleClick = (_id) => {
        const url = `/checkout/${_id}`
        history.push(url)
    }
    return (
    
        <div className="col-lg-4 col-md-6 mb-5">
            <div className="product-card">
                <div className="card-top">
                    <img className="image-fluid w-100" src={imageURL} alt="" />
                </div>
                <div className="card-middle">
                    <h2>{name}</h2>
                </div>
                <div className="card-bottom">
                    <h3>${price}</h3>
                    <Link to={`/checkout/${_id}`} className="btn btn-primary">Buy Now </Link>
                </div>
            </div>
        </div>



      


      

    
    );
};

export default Header;