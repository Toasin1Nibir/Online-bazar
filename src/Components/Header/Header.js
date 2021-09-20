
import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
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
    

        // <div class="card text-center col-md-4">
        //     <div>
        //         <img style={{ height: '250px' }} src={imageURL} alt="" />
        //         <h3>{name}-{weight}</h3>
        //         <div class="card-body d-flex justify-content-between">
        //             <h1>${price}</h1>
        //             <button type="button" class="btn btn-success" onClick={() => handleClick(_id)}>Buy now</button>
        //         </div>
        //     </div>
        // </div>
    
        // <div class="card text-center col-md-4" >
           
        //      <img style={{ height: '350px' }} src={imageURL} alt="" />
        //         <div class="card-body">
        //         <h3>{name}-{weight}</h3>
        //         <h1>${price}</h1>
        //         <button type="button" class="btn btn-success" onClick={() => handleClick(_id)}>Buy now</button>
                  
        //         </div>
              
        // </div>
        // <Card style={{ width: '26rem' }}>
        //     <Card.Img variant="top" src={imageURL} />
        //     <Card.Body>
        //         <Card.Title>{name}-{weight}</Card.Title>
        //         <Card.Text>
        //         ${price}
        //         </Card.Text>
        //         <Button variant="success" onClick={() => handleClick(_id)}>Buy now</Button>
        //     </Card.Body>
        // </Card>
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